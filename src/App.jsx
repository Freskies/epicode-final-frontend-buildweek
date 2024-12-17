import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings";
import Home from "./components/Home";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header></Header>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Home" element={<Home />} />
						<Route path="/Settings" element={<Settings />} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
