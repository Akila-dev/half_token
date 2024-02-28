// import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { FaTelegramPlane, FaChartLine } from "react-icons/fa";

import { HeroCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className={`relative w-full flex flex-col gap-7 items-center`}>
			<div className="flex- pt-[50px]">
				<div className="flex flex-col gap-5 items-center text-center">
					<h2 className={`${styles.heroHeadText}`}>
						HALVING Token: Harness the Momentum of the 2024 Bitcoin Halving Wave
					</h2>
					{/* <h1>$HLVG</h1> */}
					<p className={`${styles.heroSubText}`}>
						A Revolutionary Chapter in Cryptocurrency Unfolds
					</p>
					<div className="w-full flex flex-col md:flex-row justify-center gap-3 md:gap-5 items-center">
						<a
							href="https://t.me/halving_eth"
							target="_blank"
							className="button w-[200px] h-[50px] flex justify-center"
						>
							<FaTelegramPlane /> Join Telegram
						</a>
						<a
							href="https://www.dextools.io/app/en/ether/pair-explorer/0x4b0c83e5f5ae8d4454402348e3790967818dfbe8?t=1709116527318"
							target="_blank"
							className="button2 w-[200px] h-[50px] flex justify-center"
						>
							<FaChartLine /> Chart
						</a>
					</div>
				</div>
			</div>
			<div className="w-full h-[350px] md:h-[400px] lg:h-[450px] flex-">
				<HeroCanvas />
			</div>
		</section>
	);
};

export default SectionWrapper(Hero, "");
