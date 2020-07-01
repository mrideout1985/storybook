import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Dropdown } from "./Dropdown";
import { Sidebar } from "../sidebar/Sidebar";

export default {
	title: "Navigation",
	component: Dropdown,
	decorators: [withKnobs],
};

export const DropDownNavBar = () => {
	return <Dropdown />;
};

export const SideBarNavBar = () => {
	return <Sidebar />;
};
