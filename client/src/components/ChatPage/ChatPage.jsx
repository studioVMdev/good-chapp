import React, { useState, useEffect } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import axios from "axios";
import { getLS } from "../../utils/localStorage";
const ChatPage = () => {
	const [message, setMessage] = useState("");
	const [allComments, setAllComments] = useState([]);
	const [chatHistory, setChatHistory] = useState();

	const handleChange = (e) => {
		setMessage(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const userId = getLS();
		console.log(userId);
		const response = await axios.post(
			`${process.env.REACT_APP_BACKEND_URL}/chat/${userId}`,
			{
				comment: message,
			}
		);

		console.log(response);
		message && console.log("sending message", message);
		e.target.reset();
	};

	const sortedCommentsJSX = (data) => {
		console.log(data);
		const comments = [];
		data.people.forEach((person) => {
			// console.log(...person.comments);
			person.comments && comments.push(...person.comments);
		});
		comments.sort((a, b) => {
			return a.timestamp - b.timestamp;
		});
		// console.log(comments);
		setAllComments(comments);
		return comments;
	};

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_BACKEND_URL}/chat`).then((res) => {
			sortedCommentsJSX(res.data);
		});
	}, []);

	return (
		<>
			<section className="messages-list">
				<h3>Latest messages</h3>
				<ul>
					{allComments.map((comment) => {
						return (
							<ChatMessage key={comment.commentId} comment={comment} />
						);
					})}
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
