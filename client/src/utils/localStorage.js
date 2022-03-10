const getLS = () => {
	const user = JSON.parse(localStorage.getItem("good-chapp-user"));
	return user;
};

const setLS = (userId) => {
	localStorage.setItem("good-chapp-user", JSON.stringify(userId));
};

export { getLS, setLS };
