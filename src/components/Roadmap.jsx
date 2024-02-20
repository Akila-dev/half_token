import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { roadmap } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const RoadmapCard = ({ activity, id }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#1d1836",
				color: "#fff",
			}}
			contentArrowStyle={{ borderRight: "8px solid  #1d1836" }}
			date={"Half Token Phase " + id}
			iconStyle={{ background: activity.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<div className="w-[60%] h-[60%] object-contain flex items-center justify-center">
						<p>{id}</p>
					</div>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-semibold">
					{activity.title}
				</h3>
				<p
					className="text-secondary text-[16px] font-medium"
					style={{ margin: 0 }}
				>
					{activity.company_name}
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{activity.points.map((point, index) => (
					<li
						key={`activity-point-${index}`}
						className="text-white-100 text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Roadmap = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>
					Steps to success
				</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>Roadmap</h2>
			</motion.div>

			<div className="mt-7 md:mt-10 lg:mt-20 flex flex-col">
				<VerticalTimeline>
					{roadmap.map((activity, index) => (
						<RoadmapCard
							key={`activity-${index}`}
							activity={activity}
							id={index + 1}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Roadmap, "roadmap");
