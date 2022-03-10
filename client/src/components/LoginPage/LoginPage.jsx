import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { getLS, setLS } from "../../utils/localStorage";

// import { v4 as uuidv4 } from "uuid";

const LoginPage = () => {
	const [userNameFirst, setUserNameFirst] = useState(null);
  const [userNameLast, setUserNameLast] = useState(null);
  
  useEffect(() => {
    getLS() !== null console.log("not empty");
  },[])

	let history = useHistory();

	const loginUser = async () => {
		console.log("loggin in");

		const response = await axios.post(
			`${process.env.REACT_APP_BACKEND_URL}/`,
			{
				userNameFirst: userNameFirst,
				userNameLast: userNameLast,
			}
		);
		console.log(response);
		if (response.status === 201) {
			//! TODO: hookup server
			setLS(response.data.id);
			history.push("/chat");
			//TODO: Add toastify?!?!?!
			//TODO: ADD setimeout
		}
	};

	const handleLogin = (e) => {
		e.preventDefault();
		userNameFirst && userNameLast && loginUser();
	};

	const handleChange = (e) => {
		e.target.name === "userNameFirst"
			? setUserNameFirst(e.target.value)
			: setUserNameLast(e.target.value);
	};

	return (
		<>
			<div>LoginPage</div>
			<form>
				<label htmlFor="userNameFirst">Enter Your First Name</label>
				<input type="text" name="userNameFirst" onChange={handleChange} />
				<label htmlFor="userNameLast">Enter Your Last Name</label>
				<input type="text" name="userNameLast" onChange={handleChange} />

				<button onClick={handleLogin}>Login</button>
			</form>
		</>
	);
};

export default LoginPage;
