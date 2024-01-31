import contactBg from "assets/contact-bg.jpg";
import historyImage1 from "assets/history/image-1.png";
import historyImage2 from "assets/history/image-2.png";
import homeBg from "assets/home-bg.png";
import { Vector } from "assets/vector";
import { CTA } from "components/cta";
import { ScrollArea } from "components/ui/scroll-area";
import {
	Blocks,
	BookUser,
	Building2,
	Scale,
	Stethoscope,
	Users,
} from "lucide-react";
import Image from "next/image";
import { cn } from "utils/cn";
import { Depoiments } from "./depoiments";
import { Galleria } from "./galleria";
import { SendMailForm } from "./send-mail-form";
import { Video } from "./video";

const Home = () => {
	return (
		<main className="relative">
			<section
				className="bg-gray-800 min-h-[720px] h-full relative overflow-hidden"
				id="home"
			>
				<div className="max-w-screen-xl w-full h-screen min-h-[inherit] flex px-4 max-md:text-center items-center mx-auto relative z-10 text-white">
					<div className="w-full max-w-2xl space-y-8 flex flex-col max-md:items-center max-sm:pt-22">
						<Vector className="max-md:hidden" />
						<h1 className="max-[300px]:break-all max-sm:opacity-0">
							Sabrina M. Cunha Advogados Associados
						</h1>
						<Vector variant="full" className="md:hidden" />
						<p>
							Somos uma advocacia totalmente diferenciada, focada no atendimento
							humanizado e sistêmico onde a resolução de qualquer tipo de
							conflito é nossa especialidade, prestamos serviço de Assessoria
							Jurídica Empresarial, Individual, trabalhamos na área de Direito
							Civil, Direito Previdenciária, Direito do Consumidor. O Escritório
							Sabrina M. Cunha Advogados Associados tem os melhores
							especialistas para solucionar sua demanda.
						</p>
						<CTA />
					</div>
				</div>

				<Image
					className="absolute inset-0 object-cover object-[65%_0] h-[inherit] z-0"
					src={homeBg}
					alt=""
					priority
					placeholder="blur"
				/>
			</section>

			<section className="gradient-bg text-white py-16 sm:py-40" id="history">
				<div className="max-w-screen-xl mx-auto gap-12 w-full p-4 flex max-lg:flex-col-reverse">
					<section className="grid lg:grid-cols-1 grid-cols-2 gap-8 lg:max-w-96 w-full lg:shrink-0">
						<Image src={historyImage1} alt="" className="object-cover w-full" />
						<Image src={historyImage2} alt="" className="object-cover w-full" />
					</section>
					<section className="space-y-8">
						<h2>
							A escolha simples
							<br />
							para litígios complexos
						</h2>
						<ScrollArea className="h-72">
							<p className="pr-4">
								Essa sou eu. Minha trajetória no campo do Direito vem desde
								2002, ano em que concluí minha graduação. Após essa conquista,
								optei por dar continuidade à minha carreira na área de
								Contabilidade, área que também sou graduada, integrando o
								escritório do meu pai. Permaneci nesse ambiente por longos anos.
								<br />
								<br />
								No entanto, cheguei a um ponto de inflexão em que senti a
								necessidade de retornar à minha verdadeira missão de vida. Foi
								nesse momento que me vi em busca de algo que me permitisse
								ajudar mais pessoas. Ao me conectar com indivíduos, incluindo
								muitos empresários(as), que enfrentavam dificuldades na gestão
								de suas empresas, problemas financeiros e desafios
								interpessoais, percebi que era hora de retomar a prática
								advocatícia.
								<br />
								<br />
								Entendi que minha verdadeira vocação neste mundo era auxiliar as
								pessoas a superarem conflitos em suas vidas. Essa é a arte que
								mais amo realizar: ajudar indivíduos a enfrentarem diversas
								adversidades. Foi assim que o Direito retomou seu lugar em minha
								jornada.
								<br />
								<br />
								A partir de 2015, venho construindo minha carreira como
								Advogada, com a prioridade constante de me aprimorar. Esse
								aprimoramento envolve não apenas o desenvolvimento
								técnico-jurídico, mas também abrange aspectos pessoais e
								competências em comunicação, negociação e mediação. Atualizo-me
								continuamente nas áreas em que atuo, com enfoque especial no
								Direito do Consumidor, Direito Civil e Direito Previdenciário,
								nesta última obtendo minha pós-graduação.
								<br />
								<br />
								Assim, trilho minha missão, sempre atuando com a humanização da
								minha profissão. Optei pela Advocacia Sistêmica, pois é por meio
								dessa abordagem que consigo manter viva minha missão de vida:
								ajudar as pessoas a resolverem seus conflitos, independentemente
								da natureza deles.
							</p>
						</ScrollArea>
						<div className="flex max-sm:flex-col gap-8">
							<div className="flex items-center space-x-4 px-8 py-4 bg-secondary sm:w-fit rounded-lg text-white">
								<Scale className="w-12 h-12 text-blue-600" />
								<p className="leading-5">
									95%
									<br />
									Sucesso nos casos
								</p>
							</div>
							<div className="flex items-center space-x-4 px-8 py-4 bg-blue-600 sm:w-fit rounded-lg text-white">
								<p className="leading-5 p-4 bg-secondary rounded-lg aspect-square">
									+8
								</p>
								<p className="leading-5">
									Anos de
									<br />
									Experiência
								</p>
							</div>
						</div>
					</section>
				</div>
			</section>

			<section className="bg-background text-white" id="services">
				<div className="flex justify-between items-center max-w-screen-xl w-full mx-auto max-md:flex-col max-md:text-center gap-8 p-4">
					<div className="text-white flex flex-col space-y-4 md:whitespace-nowrap max-md:items-center">
						<h2>
							Explore
							<br />
							nossos serviços
						</h2>
						<Vector />
					</div>
					<hr className="block h-32 w-px bg-gray-700/50 border-none shrink-0 max-md:hidden" />
					<p className="max-w-2xl">
						Destacamo-nos pela excelência intrépida nos serviços jurídicos, com
						abordagem humanizada e preventiva. Compreendemos a singularidade de
						cada cliente, construindo relações sólidas baseadas na confiança.
						Oferecemos soluções inteligentes para você e sua empresa, com
						dedicação incansável, buscando resolução de qualquer conflito.
					</p>
				</div>

				<ul className="grid md:grid-cols-6 max-w-screen-2xl mx-auto gap-8 mt-12 sm:pb-40 pb-16 sm:p-4 p-2">
					{[
						{
							title: "Assessoria Jurídica para Empresas",
							desc: "Atuamos com o objetivo de buscar soluções com respaldo legal evitando o litígio para o cliente. Ajudamos a interpretar leis, fornecer aconselhamento sobre conformidade legal, representar clientes em processos judiciais, e realizar outras atividades relacionadas ao campo jurídico.",
							icon: <Building2 className="w-10 h-10 mr-4 shrink-0" />,
						},
						{
							title: "Direito Civil",
							desc: "Advogados especializados na vasta área cível podem ajudar você na resolução e/ou prevenção de inúmero problemas e litígios, de forma contenciosa (judicial) ou consultiva. Além disso, também podem ser contratados para orientar ou até mesmo mediar fora dos tribunais, atingindo quando possível, o mesmo resultado de uma demanda judicial, encurtando assim o resultado pretendido.",
							icon: <Users className="w-10 h-10 mr-4 shrink-0" />,
						},
						{
							title: "Direito Previdenciário",
							desc: "Somos especialistas em todos os Benefícios da Previdência e da Assistência Social. A Advocacia tem sido fundamental na atuação perante o INSS, para que seu requerimento possa ser mais rápido, ágil e eficaz.",
							icon: <Blocks className="w-10 h-10 mr-4 shrink-0" />,
						},
						{
							title: "Direito do Consumidor",
							desc: "Defenda seus direitos como consumidor! Nós garantimos respaldo legal para protegê-lo de cobranças indevidas, problemas com compras de produto ou serviço, entre outros conflitos com o fornecedor. Conte conosco para buscar reparação por danos causados por fornecedores. Seus direitos são nossa prioridade",
							icon: <BookUser className="w-10 h-10 mr-4 shrink-0" />,
						},
						{
							title: "Direito Médico",
							desc: "Abrangemos uma série de tópicos, tais negativa de cirurgias, procedimentos médicos, tratamentos, negativas de exames, responsabilidade civil dos profissionais de saúde, consentimento informado, direitos dos pacientes. Buscamos trazer o direito a você, cidadão que necessita ter a saúde restabelecida rapidamente.",
							icon: <Stethoscope className="w-10 h-10 mr-4 shrink-0" />,
						},
					].map((service, i) => (
						<li
							key={i.toString()}
							className={cn(
								"shrink-0 w-full sm:px-12 px-4 py-12 bg-secondary md:col-span-3 flex-col items-center gap-8 inline-flex xl:col-span-2 justify-between",
								i > 2 ? "md:!col-span-3" : "",
							)}
						>
							<div className="self-stretch flex-col justify-start items-start gap-8 flex">
								<h2 className="flex max-sm:flex-col max-sm:text-center items-center w-full">
									{service.icon}
									<span>{service.title}</span>
								</h2>
								<p className="text-zinc-300">{service.desc}</p>
							</div>
							<div className="border-t border-t-gray-700/50 pt-8 w-full">
								<CTA variant="secondary" />
							</div>
						</li>
					))}
				</ul>
			</section>

			<section className="py-20 px-4">
				<Video />
			</section>

			<Depoiments />

			<Galleria />

			<section
				className="bg-gray-800 md:min-h-[105vh] relative overflow-hidden flex flex-col justify-center items-center md:p-4"
				id="cta"
			>
				<div className="lg:px-16 bg-background w-full text-white md:px-8 p-4 max-md:h-full py-8 relative z-10 max-w-screen-xl mx-auto">
					<div className="flex-col gap-4 flex text-center items-center">
						<h2>Interessado? Fale com a gente</h2>
					</div>
					<div className="flex gap-12 mt-10 max-md:flex-col">
						<SendMailForm />
						<div className="flex flex-col h-auto w-full flex-1 md:min-w-[26rem]">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.712249895021!2d-47.45389792378898!3d-23.54284976091417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a0a4b9dc5cd%3A0xa4d1346ebb1235!2sR.%20Monte%20Alegre%2C%20390%20-%20Centro%2C%20Votorantim%20-%20SP%2C%2018110-065!5e0!3m2!1spt-BR!2sbr!4v1705947505579!5m2!1spt-BR!2sbr"
								className="border-none w-full md:h-full h-96"
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Endereço google mapa"
							/>
							<ul className="w-full h-fit justify-center items-start gap-6 flex flex-wrap pt-4">
								<li className="flex-col justify-start items-center space-y-2 flex">
									<h2 className="text-2xl font-bold">Endereço</h2>
									<address className="text-center text-base not-italic text-muted-foreground">
										R. Monte Alegre, nº 390
										<br />
										Centro Votorantim-SP
										<br />
										18.110-065
									</address>
								</li>
								<li className="flex-col justify-start items-center space-y-2 flex">
									<h2 className="text-2xl font-bold">Contate-nos</h2>
									<p className="text-center text-base text-muted-foreground">
										<a href="tel:+551532438188">(15) 3243-8188</a>
										<br />
										<a href="tel:+551532438188">(15) 99119-8369</a>
									</p>
								</li>
								<li className="flex-col justify-start items-center space-y-2 flex">
									<h2 className="text-2xl font-bold">E-mail</h2>
									<a
										href="mailto:cunha-advocacia@adv.oabsp.org.br"
										className="text-center text-base text-muted-foreground break-all"
									>
										cunha-advocacia@adv.oabsp.org.br
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<Image
					className="absolute inset-0 object-cover h-[inherit] z-0"
					src={contactBg}
					alt=""
					priority
					placeholder="blur"
				/>
			</section>
		</main>
	);
};

export default Home;
