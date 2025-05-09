import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
const Navbar = () => {
	const isCourseListPage = location.pathname.includes("/course-list");

	const { openSignIn } = useClerk();
	const { user } = useUser();
	return (
		<div
			className={`flex gap-5 items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-4 border-b ${
				isCourseListPage
					? "bg-white"
					: "bg-gradient-to-r from-blue-500 via-purple-500 to-green-400"
			}`}
		>
			<img
				src={assets.logo}
				alt="logo"
				className=" w-21 md:w-28 lg:w-32 cursor-pointer"
			/>
			{user && (
				<div className="hidden md:flex items-center gap-12 text-white font-medium">
					<Link
						to="/become-educator"
						className="hover:underline transition duration-200"
					>
						Become Educator
					</Link>
					<Link
						to="/my-enrollments"
						className="hover:underline transition duration-200"
					>
						My Enrollments
					</Link>
				</div>
			)}
			{user ? (
				<div className="hidden md:inline-block">
					<UserButton />
				</div>
			) : (
				<button
					onClick={() => openSignIn()}
					className="hidden md:inline-block bg-white text-blue-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-100 transition duration-300"
				>
					Create Account
				</button>
			)}

			{/* For phone screens */}
			<div className="md:hidden flex items-center justify-between w-full text-white font-medium">
				<div className="flex items-center gap-1 sm:gap-2 max-sm:text-sx">
					{user && (
						<div className="flex gap-1">
							<Link
								to="/become-educator"
								className="hover:underline transition duration-200"
							>
								Become Educator
							</Link>
							<Link
								to="/my-enrollments"
								className="hover:underline transition duration-200"
							>
								My Enrollments
							</Link>
						</div>
					)}
				</div>
				{user ? (
					<UserButton />
				) : (
					<button
						onClick={() => openSignIn()}
						className="bg-white rounded-full p-2 shadow hover:bg-blue-100 transition"
					>
						<img
							src={assets.user_icon}
							alt="user icon"
							className="w-6 h-6"
						/>
					</button>
				)}
			</div>
		</div>
	);
};

export default Navbar;
