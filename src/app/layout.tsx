import Image1 from "assets/footer/image1.webp";
import Image2 from "assets/footer/image2.webp";
import Image3 from "assets/footer/image3.webp";
import { Google } from "assets/google";
import logo from "assets/logo.png";
import { Vector } from "assets/vector";
import { WhatsApp } from "assets/whatsapp";
import { Dialog, DialogContent, DialogTrigger } from "components/ui/dialog";
import { Instagram, Menu } from "lucide-react";
import type { Metadata } from "next";
import localFonts from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "utils/cn";
import "./globals.css";
import { Toast } from "./toast";

const cambria = localFonts({
	src: [
		{
			path: "./cambria-bold.woff2",
			style: "normal",
			weight: "700",
		},
		{
			path: "./cambria.woff2",
			style: "normal",
			weight: "400",
		},
	],
});

export const metadata: Metadata = {
	title: "Sabrina M. Cunha | advogados associados",
	description:
		"Somos uma advocacia totalmente diferenciada, focada no ATENDIMENTO HUMANIZADO E SISTÊMICO onde a resolução de qualquer tipo de conflito é nossa especialidade, principalmente na área Previdenciária, Direito Civil, Direito do Consumidor e Assessoria Jurídica.",
};

export const GTM_ID = process.env.NEXT_PUBLIC_GTM;

const Logo = (
	<Link
		href="/"
		className="flex flex-col justify-center items-center text-white"
	>
		<Image src={logo} alt="S.C." className="max-w-52" />
		<span className="text-[2.6em] max-sm:text-3xl leading-10 font-bold text-center whitespace-nowrap">
			Sabrina M. Cunha
		</span>
	</Link>
);

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="pt-BR">
			<head>
				<Script
					id="gtm-script"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
            `,
					}}
				/>
			</head>
			<body className={`${cambria.className}`}>
				<header className="absolute top-0 z-50 w-full text-white">
					<div className="md:p-8 p-4 flex justify-between max-w-screen-xl mx-auto">
						<Dialog>
							{Logo}
							<nav className="md:space-x-8 flex md:justify-center justify-between items-center">
								<Link href="/#home" className="max-md:sr-only">
									Início
								</Link>
								<Link href="/#history" className="max-md:sr-only">
									Sobre Mim
								</Link>
								<Link href="/#services" className="max-md:sr-only">
									Serviços
								</Link>
								<Link href="/#cta" className="max-md:sr-only">
									Contato
								</Link>
								<DialogTrigger aria-hidden className="block md:hidden p-4">
									<Menu className="w-6 h-6" />
								</DialogTrigger>
							</nav>

							<DialogContent
								aria-hidden
								className="md:hidden !w-screen !h-fit flex flex-col items-center"
							>
								<DialogTrigger asChild>
									<Link
										href="/#home"
										className="text-xl text-center p-4 w-full hover:bg-slate-200 focus:bg-slate-200"
									>
										Início
									</Link>
								</DialogTrigger>
								<DialogTrigger asChild>
									<Link
										href="/#history"
										className="text-xl text-center p-4 w-full hover:bg-slate-200 focus:bg-slate-200"
									>
										Sobre Mim
									</Link>
								</DialogTrigger>

								<DialogTrigger asChild>
									<Link
										href="/#services"
										className="text-xl text-center p-4 w-full hover:bg-slate-200 focus:bg-slate-200"
									>
										Serviços
									</Link>
								</DialogTrigger>
								<DialogTrigger asChild>
									<Link
										href="#"
										className="text-xl text-center p-4 w-full hover:bg-slate-200 focus:bg-slate-200"
									>
										Contato
									</Link>
								</DialogTrigger>
							</DialogContent>
						</Dialog>
					</div>
				</header>
				<div className="fixed bottom-24 md:bottom-8 right-8 flex z-[100] rounded-full bg-green-600 hover:scale-105 transition-all">
					<a
						href={`https://wa.me/15991198369?text=${encodeURIComponent(
							"Olá vim do site!",
						)}`}
						className="p-4 w-fit"
						aria-label="WhatsApp"
						target="_blank"
						rel="noreferrer"
					>
						<WhatsApp className="w-8 h-8 text-white" />
					</a>
				</div>
				{children}
				<footer className="gradient-bg text-primary-foreground md:py-40 pt-16">
					<section className="flex items-center justify-center max-w-7xl mx-auto overflow-hidden">
						<div className="flex-shrink-0 flex flex-row-reverse mt-px pr-8 min-w-16 overflow-hidden max-w-full">
							<Vector size="420" className="flex-shrink-0 rotate-180" />
						</div>
						{Logo}
						<div className="flex-shrink-0 mt-px min-w-16 pl-8 overflow-hidden max-w-full">
							<Vector size="420" className="flex-shrink-0" />
						</div>
					</section>
					<section className="max-md:flex-col max-md:items-center mt-8 max-w-7xl gap-8 py-16 items-center mx-auto flex justify-between w-full">
						<div className="flex-col flex w-fit">
							<h2 className="border-b-[1px] border-t-[1px] px-4 border-muted-foreground py-4 mb-8 w-full max-md:text-center">
								Acesso Rápido
							</h2>
							<nav className="gap-8 flex items-center justify-center px-4 flex-wrap">
								<Link href="/#home" className="whitespace-nowrap">
									Início
								</Link>
								<Link href="/#history" className="whitespace-nowrap">
									Sobre Mim
								</Link>
								<Link href="/#services" className="whitespace-nowrap">
									Serviços
								</Link>
								<Link href="/#cta" className="whitespace-nowrap">
									Contato
								</Link>
							</nav>
						</div>

						<ul className="grid grid-cols-6 grid-rows-2 gap-4 h-64 w-full md:w-1/2 px-4">
							{(
								[
									[Image1, "row-span-2 col-span-3"],
									[Image3, "col-span-3"],
									[Image2, "col-span-3"],
								] as const
							).map(([image, className], i) => (
								<Dialog key={i.toString()}>
									<DialogTrigger asChild>
										<li
											className={cn(
												className,
												"cursor-pointer overflow-hidden group",
											)}
										>
											<Image
												src={image}
												alt=""
												className={cn(
													"w-full h-full object-cover group-hover:scale-105 transition-all",
													i === 0 && "object-[0_20%]",
												)}
											/>
										</li>
									</DialogTrigger>
									<DialogContent
										className={cn(
											"max-w-[90vw] max-h-[90dvh] p-0 overflow-hidden border-none",
											i === 0 && "lg:max-w-screen-lg",
										)}
									>
										<Image
											src={image}
											alt=""
											className="w-full h-full object-center object-cover rounded-xl"
										/>
									</DialogContent>
								</Dialog>
							))}
						</ul>
					</section>
					<section className="border-muted-foreground max-md:flex-col items-center mt-8 max-w-7xl px-4 mx-auto border-b-[1px] border-t-[1px] flex justify-between w-full">
						<p className="text-sm py-2 text-center">
							<span className="text-primary-300">Copyright © </span>
							<span className="text-sky-600">Sabrina M. Cunha</span>
							<span className="text-primary-300"> | Distribuído por </span>
							<Link href="https://devstyle.com.br/" className="text-sky-600">
								DevStyle
							</Link>
						</p>
						<div className="text-sm py-2 text-sky-600 flex items-center">
							<span>Redes:</span>
							<ul className="text-primary-foreground flex gap-4 ml-4">
								<li>
									<a href="https://www.instagram.com/sabrinacunha.advogada?igsh=a2VlaTJhdG9pbTRi">
										<Instagram className="w-8 h-8" />
										<span className="sr-only">Instagram</span>
									</a>
								</li>
								<li>
									<a href="https://g.co/kgs/xkQsMTJ">
										<Google />
										<span className="sr-only">Google</span>
									</a>
								</li>
							</ul>
						</div>
					</section>
				</footer>
				<noscript>
					<iframe
						src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
						height="0"
						width="0"
						title=" "
						style={{ display: "none", visibility: "hidden" }}
					/>
				</noscript>
				<Toast />
			</body>
		</html>
	);
};

export default RootLayout;
