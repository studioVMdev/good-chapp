const getLS = () => {
	console.log("getting");
	const user = localStorage.getItem("good-chapp-user");
	return user ?? JSON.parse(user);
};

const setLS = (userId) => {
	console.log("setting");
	localStorage.setItem("test", "test");
	localStorage.setItem("good-chapp-user", JSON.stringify(userId));
};

export { getLS, setLS };
