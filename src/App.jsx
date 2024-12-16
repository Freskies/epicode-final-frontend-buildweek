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
						<Route path="/Settings" element={<Settings />} />
						<Route path="/Home" element={<Home />} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
