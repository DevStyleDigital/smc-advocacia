"use client";

export const Video = () => {
	return (
		<video
			width="320"
			height="240"
			controls
			preload="none"
			poster="/video/video-banner.jpg"
			muted={false}
			className="max-w-screen-xl mx-auto w-full"
			onClick={(ev) => {
				ev.preventDefault();
				ev.currentTarget.play();
			}}
			onKeyDown={() => {}}
		>
			<source
				src="https://www.googleapis.com/drive/v3/files/1Uxtg6B8IemWqeuo1R68UxWnSinyssas6?alt=media&key=AIzaSyBZenjs3R4vsQ2Fv_QIoYTX9gC3r_8UTtk"
				type="video/mp4"
			/>
			Seu navegador não suporta videos.
		</video>
	);
};
