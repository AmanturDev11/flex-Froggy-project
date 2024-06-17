// import React from "react";
// import { DataFroggy } from "../../utils/data";

// const FlexFroggy = () => {
// 	return (
// 		<div>
// 			FlexFroggy
// 			{DataFroggy.map((item) => (
// 				<div key={item.id}>
// 					<p>{item.text}</p>
// 					{/* <div>{item.instruction}</div> */}
// 					<p>{item.example}</p>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default FlexFroggy;
import React from "react";
import { DataFroggy } from "../../utils/data";

const FlexFroggy = () => {
	return (
		<div>
			<h1>FLEXBOX FROGGY</h1>
			{DataFroggy.map((item) => (
				<div key={item.id}>
					<p>{item.text}</p>
					{item.instruction.map((instr, index) => (
						<div key={index}>
							<p>{instr.сondition1}</p>
							<p>{instr.сondition2}</p>
							<p>{instr.сondition3}</p>
							<p>{instr.сondition4}</p>
							<p>{instr.сondition5}</p>
						</div>
					))}
					<p>{item.example}</p>
				</div>
			))}
		</div>
	);
};

export default FlexFroggy;
