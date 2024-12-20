import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "./redux/action/profile";
import { fetchProfileIfNotExist } from "./fetchFunctions";
import Profile from "./components/Profile";
import Home from "./components/Home";
import MainNavbar from "./components/MainNavbar";
import Loading from "./components/Loading";
import Jobs from "./components/Jobs.jsx";

function App() {
	// FETCH PROFILE IF NOT IN REDUX STORE
	const [error, setError] = useState(false);
	const { _id: profileId } = useSelector(({ profile }) => profile);

	const dispatch = useDispatch();
	const setterProfile = useCallback(
		profile => dispatch(setProfile(profile)),
		[dispatch],
	);

	useEffect(() => {
		try {
			fetchProfileIfNotExist(profileId, setterProfile);
		} catch {
			setError(true);
		}
	}, [profileId, setterProfile]);

	if (error) return <p>We&apos;re sorry an error is occured</p>;

	if (!profileId) return <Loading />;

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
						<Route path="/jobs" element = {<Jobs />} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
