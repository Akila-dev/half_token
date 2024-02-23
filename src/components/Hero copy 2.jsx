import { motion } from "framer-motion";

import { styles } from "../styles";
import { FaTelegramPlane } from "react-icons/fa";

import { HeroCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className={`relative w-full h-screen mx-auto`}>
			<div className="absolute top-0 left-0 w-full mt-[100px]">
				<div className="flex flex-col gap-3 items-center text-center">
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
			<div className="flex-1 w-full h-screen">
				<HeroCanvas />
			</div>
		</section>
	);
};

export default Hero;
