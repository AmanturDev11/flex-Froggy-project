import { TextField } from "@mui/material";

const Input = ({ type, onChange, value, ...rest }) => {
	return <TextField type={type} onChange={onChange} value={value} {...rest} />;
};

export default Input;
