import React, { useState } from "react";
// import image1Icon from "../assets/icons/skip-left-fill.svg";
// import image2Icon from "../assets/icons/skip-right-fill.svg";
// import { DataFroggy } from "../utils/data";
// import FlexFroggy from "./flexFroggy/FlexFroggy";
import { Button } from "./UI/Button";
import Input from "./UI/Input";
import scss from "./FroggyLogica.module.scss";
import Header from "../layout/header/Header";
import MapText from "./mapText/MapText";
// import { DataFroggy } from "../utils/data";

const FroggyLogica = ({ levelData, nextLevel, prevLevel, input, setInput }) => {
	// const [input, setInput] = useState("");
	const [correct, setCorrect] = useState(false);
	const [number, setNumber] = useState(0);

	const handleChange = (e) => {
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
			(number === 15 && value === "align-self:flex-end")
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
		<div className={scss.FroggyLogica}>
			<div className="container">
				<div className={scss.content}>
					<div>
						{/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									marginRight: "50px",
									backgroundColor: "rgba(216, 208, 208, 0.771)",
									borderRadius: "3px",
									width: "180px",
									cursor: "pointer",
								}}>
								<img
									style={{
										width: "25px",
										cursor: "pointer",
										backgroundColor: "rgba(216, 208, 208, 0.771)",
									}}
									onClick={handlePrevClick}
									src={image1Icon}
									alt=""
								/>
								Уровень {number + 1} из {DataFroggy.length}
								<img
									style={{
										width: "25px",
										cursor: "pointer",
										backgroundColor: "rgba(216, 208, 208, 0.771)",
									}}
									onClick={handleNextClick}
									src={image2Icon}
									alt=""
								/>
							</div>
						</div> */}
						<Header
							number={number}
							handlePrevClick={handlePrevClick}
							handleNextClick={handleNextClick}
						/>
						<MapText levelData={levelData} number={number} />
						{/* <div>
							<div>
								<span>{levelData.text}</span>
							</div>
							{currentInstruction.map((el, index) => (
								<div key={index}>
									<ul>
										<li>{el.condition1 && el.condition1}</li>
										<li>{el.condition2 && el.condition2}</li>
										<li>{el.condition3 && el.condition3}</li>
										<li>{el.condition4 && el.condition4}</li>
										<li>{el.condition5 && el.condition5}</li>
									</ul>
								</div>
							))}
						</div> */}
						{/* <input type="text" value={input} onChange={handleChange} /> */}
						{/* <button onClick={handleButtonClick} disabled={!correct}>
				Move
			</button> */}
						<div className={scss.cards}>
							<div>
								<Input type="text" value={input} onChange={handleChange} />
							</div>
							<Button
								onClick={handleButtonClick}
								disabled={!correct}
								variant="contained">
								Add
							</Button>
						</div>
					</div>
					{/* <span>{levelData.}</span> */}
					{/* {currentInstruction.map((el, index) => (
						<div key={index}>
							<span>{el.vari && el.vari}</span>
						</div>
					))} */}
					{/* <FlexFroggy level={level} input={input} /> */}
				</div>
			</div>
		</div>
	);
};

export default FroggyLogica;
