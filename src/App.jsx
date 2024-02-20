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
				<About />
				{/* <div className="relative z-0">
					<About />
					<StarsCanvas />
				</div> */}
				<Tokenomics />
				<Roadmap />
				<Team />
				{/* <Logos /> */}
				{/* <div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div> */}
			</div>
		</BrowserRouter>
	);
};

export default App;
