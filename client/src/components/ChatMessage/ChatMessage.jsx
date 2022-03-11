import React from "react";

const ChatMessage = ({ comment }) => {
	return (
		<>
			<p>{comment.comment}</p>
			<p>{comment.timestamp}</p>
			<p>{comment.authorFullName}</p>
		</>
	);
};

export default ChatMessage;
