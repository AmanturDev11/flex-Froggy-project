// import React, { useState } from "react";
// import "./FroggyLogica.css";
// import image1Icon from "../assets/icons/skip-left-fill.svg";
// import image2Icon from "../assets/icons/skip-right-fill.svg";
// import { DataFroggy } from "../utils/data";

// const FroggyLogica = ({ levelData, nextLevel, prevLevel }) => {
// 	const [input, setInput] = useState("");
// 	const [correct, setCorrect] = useState(false);
// 	const [number, setNumber] = useState<number>(0);

// 	const handleChange = (e) => {
// 		const value = e.target.value.trim();
// 		setInput(value);

// 		if (
// 			(number === 0 && value === "flex-end") ||
// 			(number === 1 && value === "center") ||
// 			(number === 2 && value === "space-around")
// 		) {
// 			setCorrect(true);
// 		} else {
// 			setCorrect(false);
// 		}
// 	};

// 	const handleButtonClick = () => {
// 		if (correct) {
// 			nextLevel();
// 			setInput("");
// 			setCorrect(false);
// 			setNumber((prevValue) => prevValue + 1);
// 		}
// 	};

// 	const handlePrevClick = () => {
// 		if (number > 0) {
// 			prevLevel();
// 			setInput("");
// 			setCorrect(false);
// 			setNumber((prevValue) => prevValue - 1);
// 		}
// 	};

// 	const handleNextClick = () => {
// 		nextLevel();
// 		setInput("");
// 		setCorrect(false);
// 		setNumber((prevValue) => prevValue + 1);
// 	};

// 	const currentInstruction = DataFroggy[number].instruction;

// 	return (
// 		<div style={{ width: "100%", maxWidth: "1400px" }}>
// 			<span style={{ display: "flex", alignItems: "center" }}>
// 				<img
// 					style={{ width: "35px", cursor: "pointer" }}
// 					onClick={handlePrevClick}
// 					src={image1Icon}
// 					alt=""
// 				/>
// 				Уровень {number + 1} из {DataFroggy.length}
// 				<img
// 					style={{ width: "35px", cursor: "pointer" }}
// 					onClick={handleNextClick}
// 					src={image2Icon}
// 					alt=""
// 				/>
// 			</span>
// 			<div>{levelData.text}</div>
// 			{currentInstruction.map((el, index) => (
// 				<div style={{ width: "100%" }} key={index}>
// 					<p>{el.condition1 && el.condition1}</p>
// 					<p>{el.condition2 && el.condition2}</p>
// 					<p>{el.condition3 && el.condition3}</p>
// 					<p>{el.condition4 && el.condition4}</p>
// 					<p>{el.condition5 && el.condition5}</p>
// 					<div>
// 						<div style={{ display: "flex", justifyContent: input }}>
// 							{el.img1 && (
// 								<img
// 									style={{
// 										display: "flex",
// 										justifyContent: input,
// 										position: "relative",
// 										zIndex: "100",
// 									}}
// 									src={el.img1}
// 									alt="logo"
// 								/>
// 							)}
// 						</div>
// 						{el.icon1 && (
// 							<img
// 								src={el.icon1}
// 								style={{ position: "relative", left: "800px", bottom: "300px" }}
// 								alt="logo"
// 							/>
// 						)}
// 					</div>
// 					<div>
// 						{el.imgkh && (
// 							<img
// 								style={{
// 									display: "flex",
// 									justifyContent: input,
// 									position: "relative",
// 									zIndex: "100",
// 								}}
// 								src={el.imgkh}
// 								alt="logo"
// 							/>
// 						)}
// 						{el.img2 && (
// 							<img
// 								style={{
// 									display: "flex",
// 									justifyContent: input,
// 									position: "relative",
// 									zIndex: "100",
// 								}}
// 								src={el.img2}
// 								alt="logo"
// 							/>
// 						)}
// 						{el.iconkh && (
// 							<img
// 								src={el.iconkh}
// 								style={{ position: "relative", left: "800px", bottom: "300px" }}
// 								alt="logo"
// 							/>
// 						)}
// 						{el.icon2 && (
// 							<img
// 								src={el.icon2}
// 								style={{ position: "relative", left: "800px", bottom: "300px" }}
// 								alt="logo"
// 							/>
// 						)}
// 						{el.img3 && (
// 							<img
// 								style={{
// 									display: "flex",
// 									justifyContent: input,
// 									position: "relative",
// 									zIndex: "100",
// 								}}
// 								src={el.img3}
// 								alt="logo"
// 							/>
// 						)}
// 						{el.icon3 && (
// 							<img
// 								src={el.icon3}
// 								style={{ position: "relative", left: "800px", bottom: "300px" }}
// 								alt="logo"
// 							/>
// 						)}
// 					</div>
// 				</div>
// 			))}
// 			<input type="text" value={input} onChange={handleChange} />
// 			<button onClick={handleButtonClick} disabled={!correct}>
// 				Move
// 			</button>
// 		</div>
// 	);
// };

// export default FroggyLogica;

// !!!

import React, { useState } from "react";
import "./FroggyLogica.css";
import image1Icon from "../assets/icons/skip-left-fill.svg";
import image2Icon from "../assets/icons/skip-right-fill.svg";
import { DataFroggy } from "../utils/data";
import FlexFroggy from "./flexFroggy/FlexFroggy";

const FroggyLogica = ({ levelData, nextLevel, prevLevel, level }) => {
	const [input, setInput] = useState("");
	const [correct, setCorrect] = useState(false);
	const [number, setNumber] = useState(0);

	const handleChange = (e) => {
		const value = e.target.value.trim();
		setInput(value);

		if (
			(number === 0 && value === "flex-end") ||
			(number === 1 && value === "center") ||
			(number === 2 && value === "space-around")
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

	const currentInstruction = DataFroggy[number].instruction;

	return (
		<div style={{ width: "100%", maxWidth: "1400px" }}>
			<span style={{ display: "flex", alignItems: "center" }}>
				<img
					style={{ width: "35px", cursor: "pointer" }}
					onClick={handlePrevClick}
					src={image1Icon}
					alt=""
				/>
				Уровень {number + 1} из {DataFroggy.length}
				<img
					style={{ width: "35px", cursor: "pointer" }}
					onClick={handleNextClick}
					src={image2Icon}
					alt=""
				/>
			</span>
			<div>{levelData.text}</div>
			{currentInstruction.map((el, index) => (
				<div style={{ width: "100%" }} key={index}>
					<p>{el.condition1 && el.condition1}</p>
					<p>{el.condition2 && el.condition2}</p>
					<p>{el.condition3 && el.condition3}</p>
					<p>{el.condition4 && el.condition4}</p>
					<p>{el.condition5 && el.condition5}</p>
				</div>
			))}
			<FlexFroggy level={level} input={input} />

			<input type="text" value={input} onChange={handleChange} />
			<button onClick={handleButtonClick} disabled={!correct}>
				Move
			</button>
		</div>
	);
};

export default FroggyLogica;
