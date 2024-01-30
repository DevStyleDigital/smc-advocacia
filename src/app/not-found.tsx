import { Vector } from "assets/vector";

const NotFound = () => {
	return (
		<main>
			<section className="h-[70vh] w-full text-center flex flex-col justify-center items-center bg-secondary text-white">
				<span className="md:text-[15vw] text-[50vw] leading-[50vw] md:leading-[15vw]">
					404
				</span>
				<Vector variant="full" />
				<p className="max-w-screen-md">Ops... Pagina não encontrada!</p>
			</section>
		</main>
	);
};

export default NotFound;
