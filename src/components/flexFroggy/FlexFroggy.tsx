import React from "react";
import { DataFroggy } from "../../utils/data";
import scss from "./FlexFroggy.module.scss";

const FlexFroggy = ({ level, input }) => {
	const { instruction } = DataFroggy[level];

	return (
		<div className={scss.FlexFroggy}>
			<div className="container">
				<div className={scss.content}>
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
											width: "5rem",
											height: "5rem",
											borderRadius: "5rem",
											top: "30px",
											...(input === "flex-end"
												? { left: "325px", bottom: "60px" }
												: {}),
										}}
										src={inst.img1}
										alt="img1"
									/>
								)}
							</div>
							{inst.icon1 && (
								<img
									style={{
										position: "relative",
										left: "480px",
										bottom: "60px",
										width: "7rem",
										height: "7rem",
										borderRadius: "5rem",
									}}
									src={inst.icon1}
									alt="icon1"
								/>
							)}
							<div style={{ display: "flex", justifyContent: input }}>
								{inst.imgkh && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											borderRadius: "5rem",
											top: "40px",
											...(input === "center" ? { left: "230px" } : {}),
										}}
										src={inst.imgkh}
										alt="imgkh"
									/>
								)}
								{inst.img2 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											borderRadius: "5rem",
											top: "40px",
											...(input === "center" ? { left: "270px" } : {}),
										}}
										src={inst.img2}
										alt="img2"
									/>
								)}
							</div>
							{inst.iconkh && (
								<img
									style={{
										position: "relative",
										left: "260px",
										bottom: "60px",
										width: "7rem",
										height: "7rem",
										borderRadius: "5rem",
									}}
									src={inst.iconkh}
									alt="iconkh"
								/>
							)}
							{inst.icon2 && (
								<img
									style={{
										position: "relative",
										left: "270px",
										bottom: "60px",
										width: "7rem",
										height: "7rem",
										borderRadius: "5rem",
									}}
									src={inst.icon2}
									alt="icon2"
								/>
							)}

							<div
								style={{
									display: "flex",
									marginTop: "35px",
									gap: "1rem",
									justifyContent: input,
								}}>
								{inst.img3 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											top: "7rem",
											borderRadius: "5rem",
											...(input === "space-around"
												? { left: "100px", marginBottom: "25px" }
												: {}),
										}}
										src={inst.img3}
										alt="img3"
									/>
								)}
								{inst.img4 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											top: "7rem",
											borderRadius: "5rem",
											...(input === "space-around"
												? { left: "70px", top: "120px" }
												: {}),
										}}
										src={inst.img4}
										alt="img3"
									/>
								)}
								{inst.img5 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											top: "7rem",
											borderRadius: "5rem",
											...(input === "space-around"
												? { left: "45px", top: "120px" }
												: {}),
										}}
										src={inst.img5}
										alt="img3"
									/>
								)}
							</div>
							<div style={{ display: "flex", gap: "80px" }}>
								{inst.icon3 && (
									<img
										style={{
											position: "relative",
											justifyContent: "center",
											marginLeft: "140px",
											marginBottom: "20px",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
										}}
										src={inst.icon3}
										alt="icon3"
									/>
								)}
								{inst.icon4 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
										}}
										src={inst.icon4}
										alt="icon3"
									/>
								)}
								{inst.icon5 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
										}}
										src={inst.icon5}
										alt="icon3"
									/>
								)}
							</div>
							<div
								style={{
									display: "flex",
									// marginTop: "35px",
									gap: "4rem",
									justifyContent: input,
								}}>
								{inst.img6 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											top: "-1rem",
											borderRadius: "5rem",
											// marginBottom: "9rem",
											// bottom: "9rem",
											...(input === "space-between"
												? { left: "20px", marginBottom: "5px" }
												: {}),
										}}
										src={inst.img6}
										alt="img3"
									/>
								)}
								{inst.img7 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											top: "-1rem",
											borderRadius: "5rem",
											...(input === "space-between"
												? { left: "5px", marginBottom: "5px" }
												: {}),
										}}
										src={inst.img7}
										alt="img3"
									/>
								)}
								{inst.img8 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											top: "-1rem",
											borderRadius: "5rem",
											...(input === "space-between"
												? { left: "-10px", marginBottom: "5px" }
												: {}),
										}}
										src={inst.img8}
										alt="img3"
									/>
								)}
							</div>
							<div
								style={{ display: "flex", gap: "165px", marginTop: "-120px" }}>
								{inst.icon6 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
										}}
										src={inst.icon6}
										alt="icon3"
									/>
								)}
								{inst.icon7 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
										}}
										src={inst.icon7}
										alt="icon3"
									/>
								)}
								{inst.icon8 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
										}}
										src={inst.icon8}
										alt="icon3"
									/>
								)}
							</div>
							<div style={{ display: "flex", gap: "60px", marginTop: "100px" }}>
								{inst.img9 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// top: "-1rem",
											// top: "4rem",
											borderRadius: "5rem",
											...(input === "flex-end"
												? { top: "525px", left: "15px" }
												: {}),
										}}
										src={inst.img9}
										alt="img3"
									/>
								)}
								{inst.img10 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// top: "4rem",
											// top: "-1rem",
											borderRadius: "5rem",
											...(input === "flex-end"
												? { top: "525px", left: "25px" }
												: {}),
										}}
										src={inst.img10}
										alt="img3"
									/>
								)}
								{inst.img11 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// top: "4rem",
											borderRadius: "5rem",
											...(input === "flex-end"
												? { top: "525px", left: "38px" }
												: {}),
										}}
										src={inst.img11}
										alt="img3"
									/>
								)}
							</div>
							<div style={{ display: "flex", gap: "40px", marginTop: "430px" }}>
								{inst.icon9 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
										}}
										src={inst.icon9}
										alt="icon3"
									/>
								)}
								{inst.icon10 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
										}}
										src={inst.icon10}
										alt="icon3"
									/>
								)}
								{inst.icon11 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
										}}
										src={inst.icon11}
										alt="icon3"
									/>
								)}
							</div>
							{inst.img12 && (
								<img
									style={{
										display: "flex",
										justifyContent: input,
										position: "relative",
										zIndex: "100",
										width: "5rem",
										height: "5rem",
										// top: '-400px',
										bottom: "400px",
										// top: "9rem",
										borderRadius: "5rem",
										...(input ===
										"justify-content: center; align-items: center;"
											? { top: "-200px", left: "305px" }
											: {}),
									}}
									src={inst.img12}
									alt="img3"
								/>
							)}

							{inst.icon12 && (
								<img
									style={{
										position: "relative",
										bottom: "300px",
										left: "290px",
										// left: "270px",
										// bottom: "60px",
										width: "7rem",
										height: "7rem",
										borderRadius: "5rem",
									}}
									src={inst.icon12}
									alt="icon3"
								/>
							)}
							<div
								style={{
									display: "flex",
									gap: "3rem",
									...(input === "space-around; flex-end"
										? { display: "flex", gap: "195px" }
										: {}),
								}}>
								{inst.img13 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// top: '-400px',
											bottom: "400px",
											// top: "9rem",
											borderRadius: "5rem",
											...(input === "space-around; flex-end"
												? {
														display: "flex",
														justifyContent: "space-around",
														top: "180px",
														left: "10px",
												  }
												: {}),
										}}
										src={inst.img13}
										alt="img3"
									/>
								)}
								{inst.img14 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// top: '-400px',
											bottom: "400px",
											// top: "9rem",
											borderRadius: "5rem",
											...(input === "space-around; flex-end"
												? {
														display: "flex",
														justifyContent: "space-around",
														top: "180px",
												  }
												: {}),
										}}
										src={inst.img14}
										alt="img3"
									/>
								)}
								{inst.img15 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// top: '-400px',
											bottom: "400px",
											// top: "9rem",
											borderRadius: "5rem",
											...(input === "space-around; flex-end"
												? {
														display: "flex",
														justifyContent: "space-around",
														top: "180px",
												  }
												: {}),
										}}
										src={inst.img15}
										alt="img3"
									/>
								)}
							</div>
							<div style={{ display: "flex", gap: "155px", marginTop: "80px" }}>
								{inst.icon13 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
										}}
										src={inst.icon13}
										alt="icon3"
									/>
								)}
								{inst.icon14 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
										}}
										src={inst.icon14}
										alt="icon3"
									/>
								)}
								{inst.icon15 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
										}}
										src={inst.icon15}
										alt="icon3"
									/>
								)}
							</div>
							<div style={{ display: "flex", gap: "2rem", marginLeft: "3rem" }}>
								{inst.img16 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											bottom: "29rem",
											// top: "9rem",
											borderRadius: "5rem",
											...(input === "row-reverse" ? { left: "30rem" } : {}),
										}}
										src={inst.img16}
										alt="img3"
									/>
								)}
								{inst.img17 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											bottom: "29rem",
											// top: "9rem",
											borderRadius: "5rem",
											...(input === "row-reverse" ? { left: "15rem" } : {}),
										}}
										src={inst.img17}
										alt="img3"
									/>
								)}
								{inst.img18 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											bottom: "29rem",
											// top: "9rem",
											borderRadius: "5rem",
											// ...(input === "space-around; flex-end"
											// 	? { display: 'flex', justifyContent: 'space-around',  top: "180px", left: '10px' }
											// 	: {}),
										}}
										src={inst.img18}
										alt="img3"
									/>
								)}
							</div>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									marginLeft: "16rem",
									gap: "1rem",
								}}>
								{inst.icon16 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "35rem",
										}}
										src={inst.icon16}
										alt="icon3"
									/>
								)}
								{inst.icon17 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "35rem",
										}}
										src={inst.icon17}
										alt="icon3"
									/>
								)}
								{inst.icon18 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "35rem",
										}}
										src={inst.icon18}
										alt="icon3"
									/>
								)}
							</div>
							<div
								style={{
									display: "flex",
									gap: "2rem",
									marginLeft: "1rem",
									// ...(input === "flex-direction: column"
									// 	? { display: "flex", flexDirection: "column" }
									// 	: {}),
								}}>
								{inst.img19 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											bottom: "29rem",
											// top: "9rem",
											borderRadius: "5rem",
											...(input === "flex-direction: column"
												? { display: "flex", flexDirection: "column" }
												: {}),
										}}
										src={inst.img19}
										alt="img3"
									/>
								)}
								{inst.img20 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											bottom: "29rem",
											// top: "9rem",
											borderRadius: "5rem",
											...(input === "flex-direction: column"
												? { bottom: "335px", right: "7rem" }
												: {}),
										}}
										src={inst.img20}
										alt="img3"
									/>
								)}
								{inst.img21 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											bottom: "29rem",
											// top: "9rem",
											borderRadius: "5rem",
											...(input === "flex-direction: column"
												? { bottom: "205px", right: "14rem" }
												: {}),
										}}
										src={inst.img21}
										alt="img3"
									/>
								)}
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "1rem",
									// marginBottom: "-185rem",
									marginTop: "-35rem",
								}}>
								{inst.icon19 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											// bottom: "35rem",
										}}
										src={inst.icon19}
										alt="icon3"
									/>
								)}
								{inst.icon20 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											// bottom: "35rem",
										}}
										src={inst.icon20}
										alt="icon3"
									/>
								)}
								{inst.icon21 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											// bottom: "35rem",
										}}
										src={inst.icon21}
										alt="icon3"
									/>
								)}
							</div>
							<div
								style={{
									display: "flex",
									gap: "65px",
									marginTop: "5rem",
									marginLeft: "1rem",
								}}>
								{inst.img22 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											bottom: "1rem",
											// top: "9rem",
											borderRadius: "5rem",
											...(input ===
											"flex-direction: row-reverse; justify-content: flex-end"
												? { left: "18rem" }
												: {}),
										}}
										src={inst.img22}
										alt="img3"
									/>
								)}
								{inst.img23 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											bottom: "1rem",
											// top: "9rem",
											borderRadius: "5rem",
											// ...(input === "flex-direction: row-reverse; justify-content: flex-end"
											// 	? {   }
											// 	: {}),
										}}
										src={inst.img23}
										alt="img3"
									/>
								)}
								{inst.img24 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											bottom: "1rem",
											// top: "9rem",
											borderRadius: "5rem",
											// ...(input ===
											// "flex-direction: row-reverse; justify-content: flex-end"
											// 	? { right: "18rem" }
											// 	: {}),
										}}
										src={inst.img24}
										alt="img3"
									/>
								)}
							</div>
							<div style={{ display: "flex", gap: "2rem", marginTop: "-7rem" }}>
								{inst.icon24 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											// bottom: "35rem",
										}}
										src={inst.icon24}
										alt="icon3"
									/>
								)}
								{inst.icon23 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											// bottom: "35rem",
										}}
										src={inst.icon23}
										alt="icon3"
									/>
								)}
								{inst.icon22 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											// bottom: "35rem",
										}}
										src={inst.icon22}
										alt="icon3"
									/>
								)}
							</div>
							<div
								style={{
									display: "flex",
									gap: "3rem",
									// ...(input ===
									// "flex-direction: column; justify-content: flex-end"
									// 	? {display: "flex", flexDirection: "column", }
									// 	: {}),
								}}>
								{inst.img25 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											top: "5rem",
											borderRadius: "5rem",
											...(input ===
											"flex-direction: column; justify-content: flex-end"
												? { top: "26rem", left: "1rem" }
												: {}),
										}}
										src={inst.img25}
										alt="img3"
									/>
								)}
								{inst.img26 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											top: "5rem",
											borderRadius: "5rem",
											...(input ===
											"flex-direction: column; justify-content: flex-end"
												? { top: "550px", right: "7rem" }
												: {}),
										}}
										src={inst.img26}
										alt="img3"
									/>
								)}
								{inst.img27 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											top: "5rem",
											borderRadius: "5rem",
											...(input ===
											"flex-direction: column; justify-content: flex-end"
												? { top: "680px", right: "15rem" }
												: {}),
										}}
										src={inst.img27}
										alt="img3"
									/>
								)}
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "20px",
									marginTop: "20rem",
								}}>
								{inst.icon25 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											// bottom: "35rem",
										}}
										src={inst.icon25}
										alt="icon3"
									/>
								)}
								{inst.icon26 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											// bottom: "35rem",
										}}
										src={inst.icon26}
										alt="icon3"
									/>
								)}
								{inst.icon27 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											// bottom: "35rem",
										}}
										src={inst.icon27}
										alt="icon3"
									/>
								)}
							</div>
							<div
								style={{
									display: "flex",
									gap: "4rem",
									marginTop: "-18rem",
									marginLeft: "1rem",
									// ...(input ===
									// "flex-direction: column-reverse; justify-content: space-between"
									// 	? { display: 'flex', flexDirection: 'column', }
									// 	: {}),
								}}>
								{inst.img28 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											top: "6rem",
											borderRadius: "5rem",
											...(input ===
											"flex-direction: column-reverse; justify-content: space-between"
												? { top: "40rem" }
												: {}),
										}}
										src={inst.img28}
										alt="img3"
									/>
								)}
								{inst.img29 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											top: "6rem",
											borderRadius: "5rem",
											...(input ===
											"flex-direction: column-reverse; justify-content: space-between"
												? { top: "23rem", right: "9rem" }
												: {}),
										}}
										src={inst.img29}
										alt="img3"
									/>
								)}
								{inst.img30 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											top: "6rem",
											borderRadius: "5rem",
											...(input ===
											"flex-direction: column-reverse; justify-content: space-between"
												? { right: "18rem" }
												: {}),
										}}
										src={inst.img30}
										alt="img3"
									/>
								)}
							</div>
							<div
								style={
									{
										// display: "flex",
										// flexDirection: "column",
										// gap: "10rem",
									}
								}>
								{inst.icon30 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											// bottom: "35rem",
										}}
										src={inst.icon30}
										alt="icon3"
									/>
								)}
								{inst.icon29 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											top: "17rem",
											right: "7rem",
											// bottom: "35rem",
										}}
										src={inst.icon29}
										alt="icon3"
									/>
								)}
								{inst.icon28 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											top: "34rem",
											right: "14rem",
											// bottom: "35rem",
										}}
										src={inst.icon28}
										alt="icon3"
									/>
								)}
							</div>
							<div
								style={{
									display: "flex",
									gap: "3rem",
									// ...(input ===
									// "flex-direction: row-reverse; justify-content: center; align-items: flex-end"
									// 	? { display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'flex-end' }
									// 	: {}),
								}}>
								{inst.img31 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											top: "6rem",
											borderRadius: "5rem",
											...(input ===
											"flex-direction: row-reverse; justify-content: center; align-items: flex-end"
												? { top: "39rem", left: "24rem" }
												: {}),
										}}
										src={inst.img31}
										alt="img3"
									/>
								)}
								{inst.img32 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											top: "6rem",
											borderRadius: "5rem",
											...(input ===
											"flex-direction: row-reverse; justify-content: center; align-items: flex-end"
												? { top: "39rem", left: "8rem" }
												: {}),
										}}
										src={inst.img32}
										alt="img3"
									/>
								)}
								{inst.img33 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											top: "6rem",
											borderRadius: "5rem",
											...(input ===
											"flex-direction: row-reverse; justify-content: center; align-items: flex-end"
												? { top: "39rem", right: "8rem" }
												: {}),
										}}
										src={inst.img33}
										alt="img3"
									/>
								)}
							</div>
							<div
								style={{
									display: "flex",
									gap: "1rem",
									// justifyContent: "center",
									// alignItems: "center",
									marginTop: "33rem",
									marginLeft: "7rem",
								}}>
								{inst.icon33 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											// bottom: "35rem",
										}}
										src={inst.icon33}
										alt="icon3"
									/>
								)}
								{inst.icon32 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											// bottom: "35rem",
										}}
										src={inst.icon32}
										alt="icon3"
									/>
								)}
								{inst.icon31 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											// bottom: "35rem",
										}}
										src={inst.icon31}
										alt="icon3"
									/>
								)}
							</div>
							<div
								style={{ display: "flex", marginTop: "-28rem", gap: "4rem" }}>
								{inst.img34 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											// top: "6rem",
											borderRadius: "5rem",
											// ...(input ===
											// "flex-direction: row-reverse; justify-content: center; align-items: flex-end"
											// 	? { top: "39rem", left: "24rem" }
											// 	: {}),
										}}
										src={inst.img34}
										alt="img3"
									/>
								)}
								{inst.img35 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											// top: "6rem",
											borderRadius: "5rem",
											...(input === "order: 1" ? { left: "9rem" } : {}),
										}}
										src={inst.img35}
										alt="img3"
									/>
								)}
								{inst.img36 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											// top: "6rem",
											borderRadius: "5rem",
											...(input === "order: 1" ? { right: "9rem" } : {}),
										}}
										src={inst.img36}
										alt="img3"
									/>
								)}
							</div>
							<div>
								{inst.icon34 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "6rem",
											right: "1rem",
										}}
										src={inst.icon34}
										alt="icon3"
									/>
								)}
								{inst.icon36 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "6rem",
											left: "1rem",
										}}
										src={inst.icon36}
										alt="icon3"
									/>
								)}
								{inst.icon35 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "6rem",
											left: "3rem",
										}}
										src={inst.icon35}
										alt="icon3"
									/>
								)}
							</div>
							<div style={{ display: "flex", gap: "43px", marginLeft: "2rem" }}>
								{inst.img37 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											// top: "6rem",
											borderRadius: "5rem",
											...(input === "order: -1" ? { left: "23rem" } : {}),
											...(input === "order: -2" ? { left: "23rem" } : {}),
											...(input === "order: -3" ? { left: "23rem" } : {}),
											...(input === "order: -4" ? { left: "23rem" } : {}),
											...(input === "order: -5" ? { left: "23rem" } : {}),
											...(input === "order: -6" ? { left: "23rem" } : {}),
											...(input === "order: -7" ? { left: "23rem" } : {}),
											...(input === "order: -8" ? { left: "23rem" } : {}),
											...(input === "order: -9" ? { left: "23rem" } : {}),
										}}
										src={inst.img37}
										alt="img3"
									/>
								)}
								{inst.img37 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											// top: "6rem",
											borderRadius: "5rem",
										}}
										src={inst.img37}
										alt="img3"
									/>
								)}
								{inst.img37 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											// bottom: "1rem",
											// top: "6rem",
											borderRadius: "5rem",
										}}
										src={inst.img37}
										alt="img3"
									/>
								)}
								{inst.img38 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											borderRadius: "5rem",
											...(input === "order: -1" ? { right: "23rem" } : {}),
											...(input === "order: -2" ? { right: "23rem" } : {}),
											...(input === "order: -3" ? { right: "23rem" } : {}),
											...(input === "order: -4" ? { right: "23rem" } : {}),
											...(input === "order: -5" ? { right: "23rem" } : {}),
											...(input === "order: -6" ? { right: "23rem" } : {}),
											...(input === "order: -7" ? { right: "23rem" } : {}),
											...(input === "order: -8" ? { right: "23rem" } : {}),
											...(input === "order: -9" ? { right: "23rem" } : {}),
										}}
										src={inst.img38}
										alt="img3"
									/>
								)}
								{inst.img37 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											borderRadius: "5rem",
											// ...(input ===
											// "flex-direction: row-reverse; justify-content: center; align-items: flex-end"
											// 	? { top: "39rem", left: "24rem" }
											// 	: {}),
										}}
										src={inst.img37}
										alt="img3"
									/>
								)}
							</div>
							<div style={{ display: "flex", gap: "10px", marginLeft: "2rem" }}>
								{inst.icon38 && (
									<img
										style={{
											position: "relative",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "6rem",
											right: "1rem",
										}}
										src={inst.icon38}
										alt="icon3"
									/>
								)}
								{inst.icon37 && (
									<img
										style={{
											position: "relative",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "6rem",
											right: "1rem",
										}}
										src={inst.icon37}
										alt="icon3"
									/>
								)}
								{inst.icon37 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "6rem",
											right: "1rem",
										}}
										src={inst.icon37}
										alt="icon3"
									/>
								)}
								{inst.icon37 && (
									<img
										style={{
											position: "relative",
											// left: "270px",
											// bottom: "60px",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "6rem",
											right: "1rem",
										}}
										src={inst.icon37}
										alt="icon3"
									/>
								)}
								{inst.icon37 && (
									<img
										style={{
											position: "relative",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "6rem",
											right: "1rem",
										}}
										src={inst.icon37}
										alt="icon3"
									/>
								)}
							</div>
							<div style={{ display: "flex", gap: "43px", marginLeft: "2rem" }}>
								{inst.img39 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											borderRadius: "5rem",
											// ...(input ===
											// "flex-direction: row-reverse; justify-content: center; align-items: flex-end"
											// 	? { top: "39rem", left: "24rem" }
											// 	: {}),
										}}
										src={inst.img39}
										alt="img3"
									/>
								)}
								{inst.img39 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											borderRadius: "5rem",
											// ...(input ===
											// "flex-direction: row-reverse; justify-content: center; align-items: flex-end"
											// 	? { top: "39rem", left: "24rem" }
											// 	: {}),
										}}
										src={inst.img39}
										alt="img3"
									/>
								)}
								{inst.img40 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											borderRadius: "5rem",
											...(input === "align-self:flex-end"
												? { top: "32rem" }
												: {}),
										}}
										src={inst.img40}
										alt="img3"
									/>
								)}
								{inst.img39 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											borderRadius: "5rem",
											// ...(input ===
											// "flex-direction: row-reverse; justify-content: center; align-items: flex-end"
											// 	? { top: "39rem", left: "24rem" }
											// 	: {}),
										}}
										src={inst.img39}
										alt="img3"
									/>
								)}
								{inst.img39 && (
									<img
										style={{
											display: "flex",
											justifyContent: input,
											position: "relative",
											zIndex: "100",
											width: "5rem",
											height: "5rem",
											borderRadius: "5rem",
											// ...(input ===
											// "flex-direction: row-reverse; justify-content: center; align-items: flex-end"
											// 	? { top: "39rem", left: "24rem" }
											// 	: {}),
										}}
										src={inst.img39}
										alt="img3"
									/>
								)}
							</div>
							<div style={{ display: "flex", gap: "10px", marginLeft: "2rem" }}>
								{inst.icon39 && (
									<img
										style={{
											position: "relative",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "6rem",
											right: "1rem",
										}}
										src={inst.icon39}
										alt="icon3"
									/>
								)}
								{inst.icon39 && (
									<img
										style={{
											position: "relative",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "6rem",
											right: "1rem",
										}}
										src={inst.icon39}
										alt="icon3"
									/>
								)}
								{inst.icon40 && (
									<img
										style={{
											position: "relative",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											// bottom: "6rem",
											top: "26rem",
											right: "1rem",
										}}
										src={inst.icon40}
										alt="icon3"
									/>
								)}
								{inst.icon39 && (
									<img
										style={{
											position: "relative",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "6rem",
											right: "1rem",
										}}
										src={inst.icon39}
										alt="icon3"
									/>
								)}
								{inst.icon39 && (
									<img
										style={{
											position: "relative",
											width: "7rem",
											height: "7rem",
											borderRadius: "5rem",
											bottom: "6rem",
											right: "1rem",
										}}
										src={inst.icon39}
										alt="icon3"
									/>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FlexFroggy;
