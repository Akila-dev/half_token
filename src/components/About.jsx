import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { EarthCanvas, CoinCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

import { ABOUT } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AboutSections = () => {
	const [expanded, setExpanded] = useState(0);

	return (
		<div className="rounded-2xl space-y-1 mx-auto">
			{ABOUT.map((about, index) => (
				<motion.div key={index} className="rounded-xl overflow-hidden">
					<motion.button
						className="bg-black-100 p-4 md:px-8 md:py-6 rounded-xl relative block w-full text-left"
						// animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
						onClick={() => setExpanded(index === expanded ? false : index)}
					>
						{about.title}
					</motion.button>

					<AnimatePresence initial={false}>
						{index === expanded && (
							<motion.section
								key="content"
								initial="collapsed"
								animate="open"
								exit="collapsed"
								variants={{
									open: { opacity: 1, height: "auto" },
									collapsed: { opacity: 0, height: 0 },
								}}
								transition={{ duration: 0.1 }}
								// transition={{ duration: 0.1, ease: [0.04, 0.62, 0.23, 0.98] }}
								className="bg-[#1d1836] px-4 py-6 md:px-8 md:py-8 -mt-3 space-y-4"
							>
								{about.content.map((item, index) => (
									<p key={index} className="text-[14px]">
										{item}
									</p>
								))}

								{about.listHeader && (
									<h3 className="font-semibold text-[14px]">
										{about.listHeader}
									</h3>
								)}

								{about.list && (
									<ul className="mt-7 list-disc ml-5 space-y-2">
										{about.list.map((listItem, index) => (
											<li key={index} className="text-[14px]">
												{listItem}
											</li>
										))}
									</ul>
								)}
							</motion.section>
						)}
					</AnimatePresence>
				</motion.div>
			))}
		</div>
	);
};

const About = () => {
	return (
		<div className="space-y-10 xl:space-y-0">
			<div
				className={`xl:mt-0 flex xl:flex-row xl:items-center flex-col-reverse gap-10 overflow-hidden min-h-screen`}
			>
				<motion.div
					variants={slideIn("left", "tween", 0.2, 1)}
					className="flex-[0.75]"
				>
					<motion.div variants={textVariant()}>
						<p className={styles.sectionSubText}>About</p>
						<h2 className={styles.sectionHeadText}>
							A New Era in Cryptocurrency Begins
						</h2>
					</motion.div>

					<motion.p
						variants={fadeIn("", "", 0.1, 1)}
						className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
					>
						Get ready to witness a pivotal moment in the world of cryptocurrency
						with the upcoming 2024 Bitcoin Halving. Introducing HLVG Token – a
						unique digital asset designed to celebrate this monumental event.
						It’s more than just a token; it’s your gateway to being part of
						crypto history.
					</motion.p>
				</motion.div>

				<motion.div
					variants={slideIn("right", "tween", 0.2, 1)}
					className="xl:flex-1 xl:h-screen md:h-[550px] h-[350px]"
				>
					<EarthCanvas />
					{/* <CoinCanvas /> */}
				</motion.div>
			</div>

			<div className="pb-7 md:pb-0">
				<AboutSections />
			</div>
		</div>
	);
};

export default SectionWrapper(About, "about");
