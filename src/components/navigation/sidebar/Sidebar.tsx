import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import Burger from "./Burger";

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const handleToggle = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<>
			<div
				className={`${styles["sidebar"]} ${
					isSidebarOpen ? styles["sidebar-open"] : ""
				}`}
			>
				<Burger onClick={handleToggle} isToggled={isSidebarOpen} />
				<h1>I am an example of a dynamic sidebar</h1>
			</div>
		</>
	);
};

export { Sidebar };
