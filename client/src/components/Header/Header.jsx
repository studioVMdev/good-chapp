import React, { useState } from "react";
import LogoutButton from "../LogoutButton/LogoutButton";

const Header = ({ setIsLoggedIn, isLoggedIn }) => {
	// const isLoggedIn = getLS();
	console.log(isLoggedIn);
	return (
		<>
			<p>Logo...</p>
			<nav>Header...</nav>
			{isLoggedIn && (
				<LogoutButton
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
				/>
			)}
		</>
	);
};

export default Header;
