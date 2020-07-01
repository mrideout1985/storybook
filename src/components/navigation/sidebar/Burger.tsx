import React from "react";
import styles from "./Burger.module.scss";

interface BurgerProps {
	onClick: () => void;
	isToggled: boolean;
}

const Burger: React.FC<BurgerProps> = ({ onClick, isToggled }) => {
	return (
		<div
			onClick={onClick}
			className={`${styles["burger"]} ${
				isToggled ? styles["bar1-open"] : ""
			}`}
		>
			<div
				className={`${styles["bar1"]} ${
					isToggled ? styles["bar1-open"] : ""
				}`}
			></div>
			<div
				className={`${styles["bar2"]} ${
					isToggled ? styles["bar2-open"] : ""
				}`}
			></div>
			<div
				className={`${styles["bar3"]} ${
					isToggled ? styles["bar3-open"] : ""
				}`}
			></div>
		</div>
	);
};

export default Burger;
