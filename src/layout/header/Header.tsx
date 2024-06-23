import React from "react";
import image1Icon from "../../assets/icons/skip-left-fill.svg";
import image2Icon from "../../assets/icons/skip-right-fill.svg";
import { DataFroggy } from "../../utils/data";

const Header = ({ number, handlePrevClick, handleNextClick }) => {
	return (
		<div>
			<div>
				<div style={{ display: "flex", alignItems: "center" }}>
					<h1>FLEXBOX FROGGY</h1>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
							marginLeft: "80px",
						}}>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
