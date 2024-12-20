/**
 * Main entry point for the React application.
 *
 * - Imports necessary modules and styles.
 * - Wraps the App component with StrictMode and Redux Provider.
 * - Renders the App component into the root DOM element.
 *
 * @module main
 * @requires react.StrictMode
 * @requires react-dom.client.createRoot
 * @requires react-redux.Provider
 * @requires ./redux/store/store.js
 * @requires ./App.jsx
 * @requires ./index.css
 * @requires ./assets/style/giulio3.css
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import App from "./App.jsx";
import "./index.css";
import "./assets/style/giulio3.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
);
