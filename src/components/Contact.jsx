import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import { SiMaildotru } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

import dextools from "../assets/dextools-sm.png";

import { navLinks } from "../constants";

const Contact = () => {
	const [active, setActive] = useState("");

	return (
		<div className="space-y-[70px] lg:space-y-[100px]">
			<motion.div
				variants={textVariant()}
				className="flex flex-col items-center"
			>
				<p className={`${styles.sectionSubText} text-center`}>Disclaimer</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>
					Risk Advisory
				</h2>
				<p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center">
					Investing in digital assets involves inherent risks, potentially
					leading to total loss. Prospective investors are advised to conduct
					thorough research prior to any financial undertakings.
				</p>
			</motion.div>

			<motion.div
				variants={slideIn("up", "tween", 0.2, 1)}
				className="bg-black-100 px-5 py-10 md:p-14 rounded-2xl"
			>
				<div className="flex flex-row flex-wrap lg:flex-nowrap gap-10 w-full justify-between">
					<div className="lg:max-w-[350px] space-y-4">
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
						<p>
							Embrace the upcoming 2024 Bitcoin Halving—a pivotal moment in the
							cryptocurrency landscape.
						</p>
						{/* <p className="pt-5">© 2024 HALVING TOKEN. ALL RIGHTS RESERVED</p> */}
					</div>

					<div className="space-y-4">
						<h3 className="text-[18px] font-medium">Quick Links</h3>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4 ">
							{navLinks.map((nav) => (
								<li
									key={nav.id}
									className={`font-poppins cursor-pointer text-[16px] hover:text-white font-medium ${
										active === nav.title ? "text-[#f7931a]" : "text-secondary"
									}`}
									onClick={() => {
										setActive(nav.title);
									}}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
					</div>

					<div className="space-y-5 w-full overflow-clip max-w-[300px]">
						<h3 className="text-[18px] font-medium">Contact us</h3>
						<div>
							<a
								className="text-secondary hover:text-brand"
								href="mailto: Contact@halvingtoken.xyz"
							>
								<SiMaildotru className="text-[18px] inline-block .orange-text-gradient text-brand" />{" "}
								Contact@halvingeth.net
							</a>
						</div>
						<div className="flex gap-3">
							<a
								href="https://t.me/halving_eth"
								className="rounded-md bg-tertiary w-[50px] h-[50px] flex items-center justify-center hover:bg-brand"
							>
								<FaTelegramPlane />
							</a>
							<a
								href="https://x.com/halving_eth"
								className="rounded-md bg-tertiary w-[50px] h-[50px] flex items-center justify-center hover:bg-brand"
							>
								<BsTwitterX />
							</a>
							<a
								href="https://www.dextools.io"
								className="rounded-md bg-tertiary w-[50px] h-[50px] flex items-center justify-center hover:bg-brand"
							>
								<img
									src={dextools}
									alt="dextools"
									className="object-contain w-[22px] h-[22px]"
								/>
							</a>
						</div>
						<div className="w-full">
							<button
								className="text-secondary hover:text-brand text-wrap flex gap-2 w-full"
								onClick={() => {
									navigator.clipboard.writeText(
										"0x545ee39b788d4d6C294A2BB5c85C5F7627c0Be88"
									);
									alert("Contract Address copied");
								}}
							>
								<span className="block overflow-hidden text-ellipsis text-nowrap">
									CA: 0x545ee39b788d4d6C294A2BB5c85C5F7627c0Be88
								</span>
								<span className="text-xl w-[20px] block">
									<FiCopy className="text-xl" />
								</span>
							</button>
						</div>
					</div>
				</div>

				<div className="mt-10 pt-8 border-t border-secondary lg:text-center">
					<p>© 2024 HALVING TOKEN. ALL RIGHTS RESERVED</p>
				</div>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
