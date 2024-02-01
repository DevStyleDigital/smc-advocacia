import { readFile } from "fs/promises";
import { type NextRequest } from "next/server";
import { join } from "path";
import { mail } from "services/mail";

export async function POST(req: NextRequest) {
	try {
		const data = await req.json();
		if (!data) throw { message: "no-data" };

		if (!Object.values(data).length) throw "";
		let htmlTemplate = await readFile(
			join(process.cwd(), "src/assets/mail", "mail.html"),
			"utf-8",
		);
		const { subject, ...form } = data;

		for (const [key, value] of Object.entries(form)) {
			htmlTemplate = htmlTemplate.replaceAll(
				`{{${key.toUpperCase()}}}`,
				value as string,
			);
		}

		const res = await mail.transporter
			.sendMail({
				to: "cunha-advocacia@hotmail.com",
				from: { name: "Contato do Site", address: process.env.MAIL || "" },
				replyTo: data.email,
				subject: `${subject}`,
				html: htmlTemplate,
			})
			.then(() => "success")
			.catch(() => null);

		if (!res) throw "err";

		return Response.json({ status: "sended" });
	} catch (err) {
		return Response.json(
			{
				error: {
					statusCode: 500,
					message: (err as { message: string }).message,
				},
			},
			{ status: 500 },
		);
	}
}
