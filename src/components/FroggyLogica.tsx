import React, { ChangeEvent, FC, useState } from "react";
// import image1Icon from "../assets/icons/skip-left-fill.svg";
// import image2Icon from "../assets/icons/skip-right-fill.svg";
// import { DataFroggy } from "../utils/data";
// import FlexFroggy from "./flexFroggy/FlexFroggy";
import { Button } from "./UI/Button";
import Input from "./UI/Input";
import Header from "../layout/header/Header";
import MapText from "./mapText/MapText";
import { styled } from "@mui/material";
// import { DataFroggy } from "../utils/data";

const FroggyLogica: FC = ({
	levelData,
	nextLevel,
	prevLevel,
	input,
	setInput,
}) => {
	// const [input, setInput] = useState("");
	const [correct, setCorrect] = useState(false);
	const [number, setNumber] = useState(0);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim();
		setInput(value);

		if (
			(number === 0 && value === "flex-end") ||
			(number === 1 && value === "center") ||
			(number === 2 && value === "space-around") ||
			(number === 3 && value === "space-between") ||
			(number === 4 && value === "flex-end") ||
			(number === 5 &&
				value === "justify-content: center; align-items: center;") ||
			(number === 6 && value === "space-around; flex-end") ||
			(number === 7 && value === "row-reverse") ||
			(number === 8 && value === "flex-direction: column") ||
			(number === 9 &&
				value === "flex-direction: row-reverse; justify-content: flex-end") ||
			(number === 10 &&
				value === "flex-direction: column; justify-content: flex-end") ||
			(number === 11 &&
				value ===
					"flex-direction: column-reverse; justify-content: space-between") ||
			(number === 12 &&
				value ===
					"flex-direction: row-reverse; justify-content: center; align-items: flex-end") ||
			(number === 13 && value === "order: 1") ||
			(number === 14 && value === "order: -1") ||
			(number === 15 && value === "align-self:flex-end") ||
			(number === 16 && value === "order: 1 align-self: flex-end")	
		) {
			setCorrect(true);
		} else {
			setCorrect(false);
		}
	};

	const handleButtonClick = () => {
		if (correct) {
			nextLevel();
			setInput("");
			setCorrect(false);
			setNumber((prevValue) => prevValue + 1);
		}
	};

	const handlePrevClick = () => {
		if (number > 0) {
			prevLevel();
			setInput("");
			setCorrect(false);
			setNumber((prevValue) => prevValue - 1);
		}
	};

	const handleNextClick = () => {
		nextLevel();
		setInput("");
		setCorrect(false);
		setNumber((prevValue) => prevValue + 1);
	};

	// const currentInstruction = DataFroggy[number].instruction;

	return (
		<FroggyLogicas>
			<div className="container">
				<Content>
					<div>
						<Header
							number={number}
							handlePrevClick={handlePrevClick}
							handleNextClick={handleNextClick}
						/>
						<MapText levelData={levelData} number={number} />
						<Cards>
							<SanContent>
								<p>1</p>
								<p>2</p>
								<p>3</p>
								<p>4</p>
								<p>5</p>
								<p>6</p>
								<p>7</p>
								<p>8</p>
								<p>9</p>
								<p>10</p>
							</SanContent>
							<div>
								<p style={{ color: "rgba(31, 28, 28, 0.756)" }}>#pond </p>
								<p style={{ color: "rgba(31, 28, 28, 0.756)" }}>
									{" "}
									display: flex;
								</p>
								<Input type="text" value={input} onChange={handleChange} />
							</div>
							<Button
								onClick={handleButtonClick}
								disabled={!correct}
								variant="contained">
								Следующий
							</Button>
						</Cards>
					</div>
				</Content>
			</div>
		</FroggyLogicas>
	);
};

export default FroggyLogica;

const FroggyLogicas = styled("div")(() => ({
	display: "flex",
	width: "100%",
	height: "100vh",
	backgroundColor: "rgb(125, 201, 49)",
}));

const Content = styled("div")(() => ({
	display: "flex",
	color: "white",
}));

const Cards = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
	gap: "1rem",
	backgroundColor: "rgba(251, 248, 248, 0.8)",
	borderRadius: "5px",
}));

const SanContent = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	backgroundColor: "darkgray",
}));
