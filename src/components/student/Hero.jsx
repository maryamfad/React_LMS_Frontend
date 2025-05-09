import React from "react";
import { assets } from "../../assets/assets";

const Hero = () => {
	return (
		// <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
		// 	<h1
		// 		className="md:text-home-heading-large text-home-heading-small
		// 	relative font-bold text-gray-800 max-w-3xl mx-auto"
		// 	>
		// 		Empower your future with the courser designed to{" "}
		// 		<span className="text-blue-600">fit your choice.</span>
		// 		<img
		// 			className="md:block hidden absolute -bottom-7 right-0"
		// 			src={assets.sketch}
		// 			alt="sketch"
		// 		/>
		// 	</h1>
		// 	<p className="hidden md:block text-gray-500 max-w-2xl mx-auto">
		// 		We bring toghether world-class instructors, interactive content,
		// 		and a supportive community to help you achieve your personal and
		// 		professional goals.
		// 	</p>
		// 	{/* phone screens */}
		// 	<p className="md:hidden text-gray-500 max-w-sm mx-auto">
		// 		We bring toghether world-class instructors to help you achieve
		// 		your personal and professional goals.
		// 	</p>
		// </div>

		<div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-6 space-y-8 text-center bg-gradient-to-b from-blue-50 via-purple-50 to-green-50">
			{/* Headline */}
			<h1 className="md:text-4xl text-3xl font-extrabold text-gray-800 max-w-3xl relative leading-tight">
				Pursue excellence through education that{" "}
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-500">
					aligns with your ambitions.
				</span>
				<img
					className="md:block hidden absolute -bottom-7 right-0 w-24"
					src={assets.sketch}
					alt="sketch"
				/>
			</h1>

			{/* Description */}
			<p className="text-gray-600 max-w-2xl md:text-xl text-base px-2">
				Our platform combines expert instructors, immersive content, and
				a collaborative environment to support your personal and
				professional growth.
			</p>
		</div>
	);
};

export default Hero;
