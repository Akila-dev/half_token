import { BrowserRouter } from "react-router-dom";

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
} from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<StarsCanvas />
				<div className="bg-hero-patter bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<Countdown />
				<About />
				<Tokenomics />
				<Roadmap />
				<Team />
				<Contact />
			</div>
		</BrowserRouter>
	);
};

export default App;
