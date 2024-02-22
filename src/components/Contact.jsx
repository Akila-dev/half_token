import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import { SiMaildotru } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
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
				<h2 className={`${styles.sectionHeadText} text-center`}>Disclaimer</h2>
				<p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center">
					Purchasing digital assets carries inherent risks, which can range up
					to total loss. Any potential investor should conduct their own
					research before making any financial decisions.
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
							Get ready to witness a pivotal moment in the world of
							cryptocurrency with the upcoming 2024 Bitcoin Halving.
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

					<div className="space-y-4">
						<h3 className="text-[18px] font-medium">Contact us</h3>
						<div>
							<a
								className="text-secondary hover:text-brand"
								href="mailto: Contact@halvingtoken.xyz"
							>
								<SiMaildotru className="text-[18px] inline-block .orange-text-gradient text-brand" />{" "}
								Contact@halvingtoken.xyz
							</a>
						</div>
						<div className="flex gap-3">
							<a
								href="https://t.me/Halving_Eth"
								className="rounded-md bg-tertiary w-[50px] h-[50px] flex items-center justify-center hover:bg-brand"
							>
								<FaTelegramPlane />
							</a>
							<a
								href="http://x.com/halving_eth"
								className="rounded-md bg-tertiary w-[50px] h-[50px] flex items-center justify-center hover:bg-brand"
							>
								<BsTwitterX />
							</a>
							<a
								href="https://www.dextools.io/app/en/pairs"
								className="rounded-md bg-tertiary w-[50px] h-[50px] flex items-center justify-center hover:bg-brand"
							>
								<image
									src={dextools}
									alt="dextools"
									className="object-contain w-[35px] h-[35px]"
								/>
							</a>
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
