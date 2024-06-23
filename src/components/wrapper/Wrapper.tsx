import React, { useState } from "react";
import FroggyLogica from "../FroggyLogica";
import { DataFroggy } from "../../utils/data";
import FlexFroggy from "../flexFroggy/FlexFroggy";

const Wrapper = () => {
	const [level, setLevel] = useState(0);
	const [input, setInput] = useState("");

	const nextLevel = () => {
		if (level < DataFroggy.length - 1) {
			setLevel(level + 1);
		}
	};

	const prevLevel = () => {
		if (level > 0) {
			setLevel(level - 1);
		}
	};

	return (
		<div>
			<div className="container">
				<div style={{ display: "flex" }}>
					<FroggyLogica
						levelData={DataFroggy[level]}
						nextLevel={nextLevel}
						prevLevel={prevLevel}
						// level={level}
						input={input}
						setInput={setInput}
					/>
					<FlexFroggy level={level} input={input} />
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
