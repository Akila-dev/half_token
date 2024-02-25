import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { CanvasLoader } from "./components";

import Home from "./pages/Home";

const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<CanvasLoader />}>
				<Home />
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
