import React, { useState } from "react";
import { DDButton } from "./button/DDButton";
import styles from "./Dropdown.module.scss";

const Dropdown = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
		console.log(toggle);
	};

	return (
		<>
			<div
				className={`${styles["dropdown"]} ${
					toggle ? styles["dropdown-open"] : ""
				}`}
			>
				<div className={styles["menulogo-container"]}>
					<div className={styles["logo"]} />
					<div className={styles["menu"]}>
						<a href="/" className="items">
							Link 1
						</a>
						<a href="/" className="items">
							Link 2
						</a>

						<a href="/" className="items">
							Link 3
						</a>
						<a href="/" className="items">
							Link 4
						</a>
						<a href="/" className="items">
							Link 5
						</a>
					</div>
				</div>

				<DDButton
					className={styles["button"]}
					type="button"
					text={"Dropdown"}
					onClick={handleToggle}
				/>
			</div>
		</>
	);
};

export { Dropdown };
