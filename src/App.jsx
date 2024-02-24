import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Home from "./pages/Home";

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

			console.log(activeNav);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [section1InView, section2InView, section3InView, section4InView]);

	return (
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	);
};

export default App;
