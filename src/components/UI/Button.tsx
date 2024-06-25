import React, { FC } from "react";
import { Button as ButtonMui, styled } from "@mui/material";

interface ButtonType {
	children: React.ReactNode;
	onClick: () => void;
}

export const Button: React.FC = ({ children, onClick, variant, type, ...rest }) => {
	return (
		<ClassButton variant={variant} onClick={onClick} type={type} {...rest}>
			{children}
		</ClassButton>
	);
};

const ClassButton = styled(ButtonMui)(() => ({
	backgroundColor: "red",
	width: "110px",
	color: "white",
	// padding: '10px',
}));
