import React from "react";

const Hero = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-6 space-y-8 text-center bg-gradient-to-b from-blue-50 via-purple-50 to-green-50">
			{/* Headline */}
			<h1 className="md:text-4xl text-3xl font-extrabold text-gray-800 max-w-3xl relative leading-tight">
				Pursue excellence through education that{" "}
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-500">
					aligns with your ambitions.
				</span>
			</h1>

			{/* Description */}
			<p className="text-gray-600 max-w-2xl md:text-xl text-lg font-semibold px-2">
				Our platform combines expert instructors, immersive content, and
				a collaborative environment to support your personal and
				professional growth.
			</p>
		</div>
	);
};

export default Hero;
