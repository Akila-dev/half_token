import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StarsCanvas } from "./components";

import Home from "./pages/Home";

const App = () => {
	return (
		<BrowserRouter>
			<div className="scroll-smooth">
				<div className="hidden lg:block z-10 fixed left-0 top-0 w-full h-screen">
					<StarsCanvas />
				</div>

				<div className="z-[10000000] relative">
					<Home />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
