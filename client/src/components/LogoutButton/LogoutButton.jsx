import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const LogoutButton = ({ isLoggedIn, setIsLoggedIn }) => {
	const history = useHistory();
	return (
		<button
			onClick={() => {
				setIsLoggedIn(false);
				localStorage.clear();
				history.push("/");
			}}
		>
			{" "}
			LogoutButton
		</button>
	);
};

export default LogoutButton;
