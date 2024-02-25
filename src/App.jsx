import { BrowserRouter } from "react-router-dom";
import { StarsCanvas } from "./components";

import Home from "./pages/Home";

const App = () => {
	return (
		<BrowserRouter>
			{/* <div>
			<StarsCanvas />
			</div> */}
			<Home />
		</BrowserRouter>
	);
};

export default App;
