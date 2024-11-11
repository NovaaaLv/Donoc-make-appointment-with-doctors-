import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
	const navigate = useNavigate();

	// eslint-disable-next-line no-unused-vars
	const [showMenu, setShowMenu] = useState(false);
	const [token, setToken] = useState(true);

	const navItems = [
		{ name: "home", path: "/" },
		{ name: "all doctors", path: "/doctors" },
		{ name: "about", path: "/about" },
		{ name: "contact", path: "/contact" },
	];

	return (
		<div className="flex items-center justify-between text-sm py-4 mb-5 border-b-gray-400 border-b">
			<img
				src={assets.logo}
				alt=""
				className="w-44 cursor-pointer"
				onClick={() => navigate("/")}
			/>
			<ul className="hidden md:flex items-center gap-5 font-medium">
				{navItems.map((item, index) => (
					<NavLink className="uppercase" to={item.path} key={index}>
						<li className="py-1 text-slate-600 font-semibold">{item.name}</li>
						<hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
					</NavLink>
				))}
			</ul>
			<div className="flex items-center gap-4">
				{token ? (
					<div className="flex items-center gap-3 cursor-pointer group relative">
						<img src={assets.profile_pic} alt="" className="w-8 rounded-full" />
						<img src={assets.dropdown_icon} alt="" className="w-2.5 " />
						<div className="capitalize absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
							<div className="min-w-48 bg-stone-100 flex flex-col gap-4 p-4">
								{[
									{ name: "my profile", path: "/my-profile" },
									{ name: "my appoinment", path: "/my-appointments" },
									{ name: "logout", action: () => setToken(false) },
								].map((item, index) => (
									<p
										key={index}
										onClick={
											item.action ? item.action : () => navigate(item.path)
										}
										className="hover:text-black cursor-pointer"
									>
										{item.name}
									</p>
								))}
							</div>
						</div>
					</div>
				) : (
					<button
						onClick={() => navigate("/login")}
						className="capitalize bg-primary text-white rounded-full px-8 py-3 font-light md:block hidden"
					>
						create account
					</button>
				)}
			</div>
		</div>
	);
};

export default Navbar;
