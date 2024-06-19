import React from "react";
import { DataFroggy } from "../../utils/data";
// import scss from "./FlexFroggy.module.scss";

const FlexFroggy = ({ level, input }) => {
	const { instruction } = DataFroggy[level];

	return (
		<div>
			{instruction.map((inst, index) => (
				<div key={index}>
					<div style={{ display: "flex", justifyContent: input }}>
						{inst.img1 && (
							<img
								style={{
									display: "flex",
									justifyContent: input,
									position: "relative",
									zIndex: "100",
								}}
								src={inst.img1}
								alt="img1"
							/>
						)}
					</div>
					{inst.icon1 && (
						<img
							style={{ position: "relative", left: "800px", bottom: "300px" }}
							src={inst.icon1}
							alt="icon1"
						/>
					)}
					{inst.img2 && <img src={inst.img2} alt="img2" />}
					{inst.img3 && <img src={inst.img3} alt="img3" />}

					{inst.icon2 && <img src={inst.icon2} alt="icon2" />}
					{inst.icon3 && <img src={inst.icon3} alt="icon3" />}
					{inst.imgkh && <img src={inst.imgkh} alt="imgkh" />}
					{inst.iconkh && <img src={inst.iconkh} alt="iconkh" />}
				</div>
			))}
		</div>
	);
};

export default FlexFroggy;
