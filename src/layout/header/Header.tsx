import React from "react";
import image1Icon from "../../assets/icons/skip-left-fill.svg";
import image2Icon from "../../assets/icons/skip-right-fill.svg";
import { DataFroggy } from "../../utils/data";
import { styled } from "@mui/material";

const Header = ({ number, handlePrevClick, handleNextClick }) => {
	return (
		<div>
			<div>
				<h3>Агай дагы кыла турган нерселер бар</h3>
				<Content>
					<h1>FLEXBOX FROGGY</h1>
					<UsContent>
						<CardsContent>
							<Img onClick={handlePrevClick} src={image1Icon} alt="" />
							Уровень {number + 1} из {DataFroggy.length}
							<Img onClick={handleNextClick} src={image2Icon} alt="" />
						</CardsContent>
					</UsContent>
				</Content>
			</div>
		</div>
	);
};

export default Header;

const Content = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
}));

const UsContent = styled("div")(() => ({
	display: "flex",
	justifyContent: "flex-end",
	marginLeft: "80px",
}));

const CardsContent = styled("div")(() => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	marginRight: "50px",
	backgroundColor: "rgba(216, 208, 208, 0.771)",
	borderRadius: "3px",
	width: "180px",
	cursor: "pointer",
}));

const Img = styled("img")(() => ({
	width: "25px",
	cursor: "pointer",
	backgroundColor: "rgba(216, 208, 208, 0.771)",
}));
