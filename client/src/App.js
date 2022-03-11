import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import ChatPage from "./components/ChatPage/ChatPage";
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getLS } from "./utils/localStorage";
// import axios from "axios";
// // import StudentsList from "./";

// const BACK_END = "http://localhost:5500";
const BACK_END = `${process.env.REACT_APP_BACKEND_URL}`;

const App = () => {
	console.log(getLS());
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	console.log(isLoggedIn);

	useEffect(() => {
		if (getLS() !== null) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [isLoggedIn]);

	return (
		<div className="App">
			<Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
			<Switch>
				{/* <Redirect from="/" to="/login" /> */}
				{/* <Redirect from="/home" to="/" /> */}
				<Route
					path="/"
					exact
					render={() => {
						if (!isLoggedIn) {
							return (
								<LoginPage
									isLoggedIn={isLoggedIn}
									setIsLoggedIn={setIsLoggedIn}
								/>
							);
						}
					}}
				/>
				<Route path="/chat" component={ChatPage} />
			</Switch>
		</div>
	);
};

export default App;
