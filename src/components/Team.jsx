import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { team } from "../constants";

import Logos from "./Logos";

const TeamCard = ({ index, name, designation, image }) => (
	<motion.div
		variants={fadeIn("", "spring", index * 0.5, 0.75)}
		className="bg-black-200 p-10 rounded-3xl xl:max-w-[320px] w-full col-span-1"
	>
		<div className="mt-1 w-full">
			<img
				src={image}
				alt="project_image"
				className="w-full h-full md:h-[200px] xl:h-[250px] object-cover object-top rounded-2xl"
			/>
			<div className="mt-7 flex justify-between items-center gap-1">
				<div className="flex-1 flex flex-col">
					<p className="text-white font-medium text-[16px]">
						<span className="orange-text-gradient">@</span> {name}
					</p>
					<p className="mt-1 text-secondary text-[12px]">{designation}</p>
				</div>
			</div>
		</div>
	</motion.div>
);

const Team = () => {
	return (
		<div className={`mt-0 md:mt-12 bg-black-100 rounded-[20px] pb-5`}>
			<div
				className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[225px] md:min-h-[300px]`}
			>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>meet the team</p>
					<h2 className={styles.sectionHeadText}>Our Visionaries</h2>
				</motion.div>
			</div>
			<div
				className={`-mt-20 pb-0 md:pb-0 ${styles.paddingX} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7`}
			>
				{team.map((teammate, index) => (
					<TeamCard key={teammate.name} index={index} {...teammate} />
				))}
			</div>
			<div>
				<Logos />
			</div>
		</div>
	);
};

export default SectionWrapper(Team, "");
