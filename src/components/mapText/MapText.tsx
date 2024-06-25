import React, { FC } from "react";
import { DataFroggy } from "../../utils/data";
import { styled } from "@mui/material";

interface MapTextType {
	levelData: any;
	number: number;
}

const MapText: FC<MapTextType> = ({ levelData, number }) => {
	const currentInstruction = DataFroggy[number].instruction;
	return (
		<div style={{ marginTop: "1rem" }}>
			<div>
				<div>
					<span>{levelData.text}</span>
				</div>
				{currentInstruction.map((el, index) => (
					<TextCards key={index}>
						<ul>
							<li>{el.condition1 && el.condition1}</li>
							<li>{el.condition2 && el.condition2}</li>
							<li>{el.condition3 && el.condition3}</li>
							<li>{el.condition4 && el.condition4}</li>
							<li>{el.condition5 && el.condition5}</li>
							{/* <div>
								<h4>Туура жоб</h4>
								<span>{el.conditionJob && el.conditionJob}</span>
							</div> */}
						</ul>
					</TextCards>
				))}
			</div>
		</div>
	);
};

export default MapText;

const TextCards = styled("div")(() => ({
	marginTop: '450px",',
}));
