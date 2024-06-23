import React from "react";
import { DataFroggy } from "../../utils/data";

const MapText = ({ levelData, number }) => {
	const currentInstruction = DataFroggy[number].instruction;
	return (
		<div>
			<div>
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
			</div>
		</div>
	);
};

export default MapText;
