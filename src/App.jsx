import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import MainNavbar from "./components/MainNavbar";

function App() {
	return (
		<>
			<BrowserRouter>
				<header>
					<MainNavbar />
				</header>
				<main>
					<Routes>
						<Route path="/" element={<Navigate to="/Home" />} />
						<Route path="/Home" element={<Home />} />
						<Route path="/Profile" element={<Profile />} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
