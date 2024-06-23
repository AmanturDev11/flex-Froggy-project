import React from "react";
import { Button as ButtonMui } from "@mui/material";

export const Button = ({ children, onClick, variant, type, ...rest }) => {
	return (
		<ButtonMui variant={variant} onClick={onClick} type={type} {...rest}>
			{children}
		</ButtonMui>
	);
};
