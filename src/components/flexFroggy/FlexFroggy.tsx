import React from "react";
import { DataFroggy } from "../../utils/data";

const FlexFroggy = () => {
	return (
		<div>
			FlexFroggy
			{DataFroggy.map((item) => (
				<div key={item.id}>
					<p>{item.text}</p>
					{/* <div>{item.instruction}</div> */}
					<p>{item.example}</p>
				</div>
			))}
		</div>
	);
};

export default FlexFroggy;
