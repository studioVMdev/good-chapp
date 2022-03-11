import React, { useState } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
const ChatPage = () => {
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setMessage(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		message && console.log("sending message", message);
		e.target.reset();
	};

	return (
		<>
			<section className="messages-list">
				<h3>Latest messages</h3>
				<ul>
					<ChatMessage />
					<ChatMessage />
					<ChatMessage />
					<ChatMessage />
					<ChatMessage />
					<ChatMessage />
				</ul>
			</section>
			<form onSubmit={handleSubmit}>
				<label htmlFor="userNameFirst">Enter Message</label>
				<input type="text" name="userNameFirst" onChange={handleChange} />
				<button type="submit">Send Message ▶ </button>
			</form>
		</>
	);
};

export default ChatPage;
