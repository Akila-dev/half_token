import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

import { FaEthereum } from "react-icons/fa6";

const Navbar = ({ activeProp }) => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const popupRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 30) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (popupRef.current && !popupRef.current.contains(e.target)) {
				setToggle(false);
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	return (
		<nav
			className={`${
				styles.paddingX
			} w-full flex items-center py-5 fixed top-0 z-20 ${
				scrolled ? "bg-primary" : "bg-transparent"
			}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<p className="text-[#f5af19] text-[18px] lg:text-[23px] font-bold cursor-pointer flex uppercase">
						Halving
						<span className="text-white">Token</span>
					</p>
				</Link>

				<ul className="list-none hidden lg:flex flex-row gap-10">
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className={`${
								// active === nav.title || activeProp === index
								activeProp === index ? "text-[#f7931a]" : "text-secondary"
							} hover:text-[#fff] text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

				<div className="hidden lg:block">
					<a
						href="https://app.uniswap.org/swap"
						target="_blank"
						className="button"
					>
						<FaEthereum />
						Buy $HLVG
					</a>
				</div>

				<div className="lg:hidden flex flex-1 justify-end items-center">
					{toggle ? (
						<button className="p-0" onClick={() => setToggle(false)}>
							<img
								src={close}
								alt="menu"
								className={`object-contain w-[20px] h-[20px]`}
								onClick={() => addScaleCorrector("Hello")}
							/>
						</button>
					) : (
						<img
							src={menu}
							alt="menu"
							className={`object-contain w-[24px] h-[24px]`}
							onClick={() => setToggle(true)}
						/>
					)}

					<div
						ref={popupRef}
						className={`${
							!toggle ? "hidden" : "flex flex-col gap-6"
						} p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
							{navLinks.map((nav, index) => (
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] hover:text-white ${
										activeProp === index ? "text-[#f7931a]" : "text-secondary"
									}`}
									onClick={() => {
										setToggle(!toggle);
										setActive(nav.title);
									}}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
						<a
							href="https://app.uniswap.org/swap"
							target="_blank"
							className="button"
						>
							<FaEthereum />
							Buy $HLVG
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
