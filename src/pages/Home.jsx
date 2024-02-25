import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import {
	About,
	Contact,
	Roadmap,
	Team,
	Hero,
	Navbar,
	Tokenomics,
	StarsCanvas,
	Countdown,
} from "../components";

const App = () => {
	const [section1Ref, section1InView] = useInView({ threshold: 0.1 });
	const [section2Ref, section2InView] = useInView({ threshold: 0.1 });
	const [section3Ref, section3InView] = useInView({ threshold: 0.1 });
	const [section4Ref, section4InView] = useInView({ threshold: 0.1 });

	const [activeNav, setActiveNav] = useState(9);

	useEffect(() => {
		const handleScroll = () => {
			section1InView
				? setActiveNav(0)
				: section2InView
				? setActiveNav(1)
				: section3InView
				? setActiveNav(2)
				: section4InView
				? setActiveNav(3)
				: setActiveNav(9);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [section1InView, section2InView, section3InView, section4InView]);

	return (
		<div className="relative z-0 bg-primary">
			<div className="-z-10 fixed h-screen w-full">
			<StarsCanvas />
			</div>
			<div className="bg-hero-patter bg-cover bg-no-repeat bg-center">
				<Navbar activeProp={activeNav} />
				<Hero />
			</div>
			<Countdown />
			<div ref={section1Ref}>
				<About />
			</div>
			<div ref={section2Ref}>
				<Tokenomics />
			</div>
			<div ref={section3Ref} className="h-auto overflow-x-clip">
				<Roadmap />
				<Team />
			</div>
			<div ref={section4Ref}>
				<Contact />
			</div>
		</div>
	);
};

export default App;
