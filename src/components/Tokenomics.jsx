import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { tokenomics } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FiCopy } from "react-icons/fi";

const TokenomicsCard = ({ index, title, icon, value }) => (
	<Tilt
		className={`xs:w-[250px] md:w-[275px] lg:w-[250px] w-full ${
			index === 1 && "cursor-pointer"
		}`}
	>
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className="w-full green-orange-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary rounded-[20px] py-5 px-7 min-h-[280px] flex justify-evenly items-center flex-col"
			>
				<img
					src={icon}
					alt="web-development"
					className="w-16 h-16 object-contain"
				/>

				<h3 className="text-white text-[20px] font-semibold text-center">
					{title}
				</h3>

				<div className="w-full overflow-hidden text-center flex gap-3">
					<div className="w-full overflow-hidden text-center">
						<p className="text-ellipsis">{value}</p>
					</div>
					{index === 1 && (
						<FiCopy
							className="text-xl"
							onClick={() => {
								navigator.clipboard.writeText(value);
								alert("Text copied");
							}}
						/>
					)}
				</div>
			</div>
		</motion.div>
	</Tilt>
);

const TokenomicsStatsCard = ({ index, title, number }) => (
	<Tilt className={`xs:w-[275px] w-full`}>
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className="w-full green-orange-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary rounded-[20px] py-5 px-7 min-h-[200px] flex justify-evenly items-center flex-col"
			>
				<h3 className="text-white text-[20px] font-semibold text-center">
					{title}
				</h3>

				<h1 className="orange-text-gradient text-white text-5xl ">{number}</h1>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<div>
			<div className="mb-10 md:mb-20 flex justify-center flex-wrap gap-10">
				<TokenomicsStatsCard index={1} title="Tax Buy" number={3} />
				<TokenomicsStatsCard index={2} title="Tax Sell" number={6} />
			</div>

			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>Tokenomics</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>Get $HLVG</h2>
			</motion.div>

			<div className="mt-10 md:mt-20 flex justify-center flex-wrap gap-10">
				{tokenomics.map((item, index) => (
					<TokenomicsCard key={item.title} index={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(About, "tokenomics");
