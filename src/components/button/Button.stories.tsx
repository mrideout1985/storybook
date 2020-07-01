import React from "react";
import styles from "./Stories.module.scss";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Button } from "./Button";

export default {
	title: "Button",
	component: Button,
	decorators: [withKnobs],
};

export const Basic = () => {
	return <Button text={text("Label", "Click Me")} type="button" />;
};

export const DifferentSizes = () => {
	return (
		<div className={styles["container"]}>
			<div className={styles["container__buttons"]}>
				<Button
					text={text("Label 1", "small")}
					type="button"
					style="small"
				/>
				<Button
					text={text("Label 2", "medium")}
					type="button"
					style="medium"
				/>
				<Button
					text={text("Label 3", "large")}
					type="button"
					style="large"
				/>
			</div>
		</div>
	);
};

export const DifferentColours = () => {
	return (
		<div className={styles["container"]}>
			<div className={styles["container__buttons"]}>
				<Button
					text={text("Label 1", "Red")}
					type="button"
					style="red"
				/>
				<Button
					text={text("Label 2", "Blue")}
					type="button"
					style="blue"
				/>
				<Button
					text={text("Label 3", "Green")}
					type="button"
					style="green"
				/>
				<Button
					text={text("Label 4", "Orange")}
					type="button"
					style="orange"
				/>
				<Button
					text={text("Label 5", "Black")}
					type="button"
					style="black"
				/>
				<Button
					text={text("Label 6", "White")}
					type="button"
					style="white"
				/>
			</div>
		</div>
	);
};

export const ButtonEffects = () => {
	return (
		<div className={styles["container"]}>
			<div className={styles["container__buttons"]}>
				<Button
					text={text("Label 1", "One")}
					type="button"
					style="btn-one"
				/>
				<Button
					text={text("Label 2", "Two")}
					type="button"
					style="btn-two"
				/>
				<Button
					text={text("Label 3", "Three")}
					type="button"
					style="btn-three"
				/>
				<Button
					text={text("Label 4", "Four")}
					type="button"
					style="btn-four"
				/>
			</div>
		</div>
	);
};
