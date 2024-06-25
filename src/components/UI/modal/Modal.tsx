import { styled } from "@mui/material";
import React, { FC } from "react";

interface ModalType {
	children: React.ReactNode;
}

const Modal: FC<ModalType> = ({ children }) => {
	return (
		<Modal_Container>
			<div>{children}</div>
		</Modal_Container>
	);
};

export default Modal;

const Modal_Container = styled("div")(() => ({
	position: "fixed",
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	background: "rgba(191, 188, 188, 0.27)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));
