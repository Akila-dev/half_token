// import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { FaTelegramPlane } from "react-icons/fa";

import { HeroCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className={`relative w-full flex flex-col gap-7 items-center`}>
			<div className="flex- pt-[50px]">
				<div className="flex flex-col gap-5 items-center text-center">
					<h2 className={`${styles.heroHeadText}`}>
						HLVG Token: Embrace the Bitcoin Halving Wave of 2024
					</h2>
					{/* <h1>$HLVG</h1> */}
					<p className={`${styles.heroSubText}`}>
						A New Era in Cryptocurrency Begins
					</p>
					<a href="https://t.me/Halving_Eth" className="button">
						<FaTelegramPlane /> Join Telegram
					</a>
				</div>
			</div>
			<div className="w-full h-[350px] md:h-[400px] lg:h-[450px] flex-">
				<HeroCanvas />
			</div>
		</section>
	);
};

export default SectionWrapper(Hero, "");
