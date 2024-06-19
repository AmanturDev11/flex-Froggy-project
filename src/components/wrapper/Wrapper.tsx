import React, { useState } from "react";
import FroggyLogica from "../FroggyLogica";
// import FlexFroggy from "../flexFroggy/FlexFroggy";
import { DataFroggy } from "../../utils/data";

const Wrapper = () => {
	const [level, setLevel] = useState(0);

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
			<FroggyLogica
				levelData={DataFroggy[level]}
				nextLevel={nextLevel}
				prevLevel={prevLevel}
				level={level}
			/>
			{/* <FlexFroggy level={level} /> */}
		</div>
	);
};

export default Wrapper;
