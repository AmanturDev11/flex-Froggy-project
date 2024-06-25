import React, { FC, useState } from "react";
import image1Icon from "../../assets/icons/skip-left-fill.svg";
import image2Icon from "../../assets/icons/skip-right-fill.svg";
import buttonX from "../../assets/icons/gas-kvas-com-p-znachok-krestika-na-prozrachnom-fone-2.png";
import { DataFroggy } from "../../utils/data";
import { styled } from "@mui/material";
import { createPortal } from "react-dom";
import Modal from "../../components/UI/modal/Modal";

interface HeaderPropsType {
	number: number;
	handlePrevClick: () => void;
	handleNextClick: () => void;
}

const Header: FC<HeaderPropsType> = ({
	number,
	handlePrevClick,
	handleNextClick,
}) => {
	const [isModal, setIsModal] = useState<boolean>(false);
	// const [count, setCount] = useState<number>(1);
	// const [openDiv, setOpenDiv] = useState<boolean>(false);

	const ModalFunk = () => {
		setIsModal(true);
	};
	return (
		<div>
			<div>
				<Content>
					<h1>FLEXBOX FROGGY</h1>
					<UsContent>
						<CardsContent>
							<Img onClick={handlePrevClick} src={image1Icon} alt="" />
							<div onClick={ModalFunk}>
								Уровень {number + 1} из {DataFroggy.length}
							</div>
							<Img onClick={handleNextClick} src={image2Icon} alt="" />
						</CardsContent>
					</UsContent>
					{isModal &&
						createPortal(
							<Modal>
								<div>
									<button style={{ width: "30px", cursor: "pointer" }}>
										1
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										2
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										3
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										4
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										5
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										6
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										7
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										8
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										9
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										10
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										11
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										12
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										13
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										14
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										15
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										16
									</button>
									<button style={{ width: "30px", cursor: "pointer" }}>
										17
									</button>
									<img
										onClick={() => setIsModal(false)}
										style={{ width: "100px", cursor: "pointer" }}
										src={buttonX}
										alt=""
									/>
								</div>
							</Modal>,
							document.getElementById("modal")
						)}
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
