"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "components/ui/form";
import { Input, InputMask } from "components/ui/input";
import { Textarea } from "components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { cn } from "utils/cn";
import * as z from "zod";

export const SendMailForm = () => {
	const [loading, setLoading] = useState(false);

	return (
		<form
			onSubmit={(ev) => {
				ev.preventDefault();
				const { name, phone, subject, message, email } =
					ev.currentTarget as any;
				setLoading(true);

				fetch("/send", {
					body: JSON.stringify({
						name: name.value,
						phone: phone.value,
						subject: subject.value,
						message: message.value,
						email: email.value,
					}),
					method: "POST",
				})
					.then((r) => {
						console.log(r);
						if (r.ok) return r.json();
						throw "err";
					})
					.then((res) => {
						toast.success("Seu email foi enviado!");
						return res;
					})
					.catch(() => {
						toast.error("Ops... algo aconteceu!");
						return "";
					})
					.finally(() => {
						setLoading(false);
					});
			}}
			className={cn("flex w-full h-fit flex-col gap-8 md:max-w-md", {
				"pointer-events-none opacity-60": loading,
			})}
		>
			<Input
				placeholder="Nome Completo*"
				name="name"
				className="w-full"
				required
			/>

			<Input
				placeholder="Endereço de Email*"
				className="w-full"
				type="email"
				name="email"
				required
			/>

			<InputMask
				mask="+55 (99) 99999-9999"
				showMask={false}
				name="phone"
				placeholder="Número de Telefone*"
				className="w-full"
				required
			/>

			<Input
				placeholder="Assunto*"
				name="subject"
				required
				className="w-full"
			/>

			<Textarea placeholder="Sua mensagem*" name="message" required />

			<Button variant="white" className="text-primary w-fit self-center px-8">
				Enviar <Send className="w-4 h-4 ml-2 mt-1" />
			</Button>
		</form>
	);
};
