import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { EarthCanvas, EthereumCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
	return (
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
					unique digital asset designed to celebrate this monumental event. It’s
					more than just a token; it’s your gateway to being part of crypto
					history.
				</motion.p>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-screen md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
				{/* <EthereumCanvas /> */}
			</motion.div>
		</div>
	);
};

export default SectionWrapper(About, "about");
