import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
	type: "submit" | "reset" | "button";
	text: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	colour?: "success" | "disabled aka retarded" | "warning";
	style?: "small" | "large" | string;
}

const Button: React.FC<ButtonProps> = ({ type, text, onClick, style }) => {
	return (
		<>
			<button
				className={style ? styles[`${style}`] : ""}
				type={type}
				onClick={onClick}
			>
				{text}
				{console.log()}
			</button>
			<div className={styles["overlay"]}></div>
		</>
	);
};

export { Button };
