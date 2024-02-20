import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { LOGOS } from "../constants";

const Logos = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{LOGOS.map((logo) => (
				<div className="w-[6.5rem] h-[6.5rem] md:w-28 md:h-28" key={logo.name}>
					<BallCanvas icon={logo.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Logos, "");
