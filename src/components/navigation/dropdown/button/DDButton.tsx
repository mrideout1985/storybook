import React from "react";
import "./DDButton.module.scss";

interface Props {
	type: "button" | "submit" | "reset";
	text: string;
	className?: string;
	onClick: () => void;
}

const DDButton: React.FC<Props> = ({ type, text, onClick, className }) => {
	return (
		<button type={type} onClick={onClick} className={className}>
			<div
				className="bar"
				style={{
					width: "2rem",
					height: ".2rem",
					backgroundColor: "black",
				}}
			/>
			<div
				className="bar"
				style={{
					width: "2rem",
					height: ".2rem",
					backgroundColor: "black",
					marginTop: ".2rem",
				}}
			/>
			<div
				className="bar"
				style={{
					width: "2rem",
					height: ".2rem",
					backgroundColor: "black",
					marginTop: ".2rem",
				}}
			/>
		</button>
	);
};

export { DDButton };
