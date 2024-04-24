import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Likes.scss";
import AsideLeft from "../../components/Aside-left/AsideLeft";
import AsideRight from "../../components/Aside-right/AsideRight";
import AudioPlayer from "../../components/Player/AudioPlayer";
import { ads, likesIcon, play, profilePic } from "../../assets/images/images";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const ClientID = "d5dd08dd0c134753938cf2e40ebfb597";
const ClientSecret = "e07ac3a41f604a2f92387f1b8288ce01";

const getToken = async () => {
	try {
		const res = await fetch("https://accounts.spotify.com/api/token", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: "Basic " + btoa(ClientID + ":" + ClientSecret),
			},
			body: "grant_type=client_credentials",
		});
		const data = await res.json();
		localStorage.setItem(
			"access_token",
			`${data.token_type} ${data.access_token}`
		);
	} catch (error) {
		console.log(error.message);
	}
};

const Likes = () => {
	const [music, setMusic] = useState([]);

	const likedMusic = async () => {
		try {
			const res = await fetch(
				`https://api.spotify.com/v1/playlists/37i9dQZF1DXd6C0zt0Jzs9`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("access_token"),
					},
				}
			);
			const data = await res.json();
			console.log(data.tracks.items);

			setMusic(data.tracks.items.slice(0, 6));
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getToken();
		// openPlayList();
		likedMusic();
	}, []);

	// const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

	return (
		<div>
			<div className="likes">
				<AsideLeft />
				<div className="likes-section">
					<section className="likes-header">
						<div className="container">
							<svg
								onClick={() => navigate("/")}
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 40 40"
								fill="none">
								<circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12.5426 19.302C12.1382 19.7064 12.1547 20.3669 12.5788 20.7506L23.2737 30.4269C23.7856 30.8901 24.576 30.8506 25.0392 30.3386C25.5024 29.8267 25.4629 29.0362 24.9509 28.5731L15.4254 19.9547L24.9962 10.3839C25.4843 9.89573 25.4843 9.10427 24.9962 8.61612C24.508 8.12796 23.7166 8.12796 23.2284 8.61612L12.5426 19.302Z"
									fill="white"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 40 40"
								fill="none">
								<circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M27.0701 19.302C27.4745 19.7064 27.458 20.3669 27.0339 20.7506L16.339 30.4269C15.8271 30.8901 15.0367 30.8506 14.5735 30.3386C14.1103 29.8267 14.1498 29.0362 14.6618 28.5731L24.1873 19.9547L14.6165 10.3839C14.1284 9.89573 14.1284 9.10427 14.6165 8.61612C15.1047 8.12796 15.8961 8.12796 16.3843 8.61612L27.0701 19.302Z"
									fill="white"
								/>
							</svg>
						</div>
					</section>

					<section className="likes-hero">
						<div
							className="container"
							style={{
								display: "flex",
								alignItems: "center",
								gap: "50px",
								justifyContent: "space-between",
							}}>
							<div>
								<img src={likesIcon} alt="" />
							</div>
							<div>
								<p style={{ color: "white", fontSize: "12px" }}>
									PUBLIC <br /> PLAYLIST
								</p>
								<h1>Liked Songs</h1>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "12px",
									}}>
									<img src={profilePic} alt="" />
									<span>davedirect3</span>
									<span>-</span>
									<span>34 songs</span>
								</div>
							</div>
						</div>
					</section>

					<section className="list-section">
						<div className="container">
							<div
								className="list-header"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "21px",
										padding: "40px 0",
									}}>
									<img src={play} alt="" width={62} />
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="52"
										height="52"
										viewBox="0 0 52 52"
										fill="none">
										<g clipPath="url(#clip0_1_4256)">
											<path
												d="M26.0023 12.9237L25.1506 12.132C21.0545 8.32467 14.7686 8.45914 10.826 12.545C6.87682 16.6417 6.7286 23.2093 10.3911 27.4886L25.9978 43.6979L41.6083 27.4885C45.2702 23.2099 45.1251 16.6539 41.1727 12.5444L26.0023 12.9237ZM26.0023 12.9237L26.8533 12.1314M26.0023 12.9237L26.8533 12.1314M26.8533 12.1314C30.9367 8.32997 37.2348 8.45444 41.1723 12.544L26.8533 12.1314Z"
												stroke="white"
												strokeWidth="2.5"
											/>
										</g>
										<defs>
											<clipPath id="clip0_1_4256">
												<rect width="52" height="52" fill="white" />
											</clipPath>
										</defs>
									</svg>

									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="52"
										height="52"
										viewBox="0 0 52 52"
										fill="none">
										<g clipPath="url(#clip0_1_4258)">
											<circle
												cx="26"
												cy="26"
												r="17.75"
												stroke="white"
												strokeWidth="2.5"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M34.8388 28.9289L26.8839 36.8839C26.3957 37.372 25.6043 37.372 25.1161 36.8839L17.1612 28.9289C16.673 28.4408 16.673 27.6493 17.1612 27.1612C17.6493 26.673 18.4408 26.673 18.9289 27.1612L24.75 32.9822L24.75 17C24.75 16.3096 25.3096 15.75 26 15.75C26.6904 15.75 27.25 16.3096 27.25 17L27.25 32.9822L33.0711 27.1612C33.5592 26.673 34.3507 26.673 34.8388 27.1612C35.327 27.6493 35.327 28.4408 34.8388 28.9289Z"
												fill="white"
											/>
										</g>
										<defs>
											<clipPath id="clip0_1_4258">
												<rect width="52" height="52" fill="white" />
											</clipPath>
										</defs>
									</svg>

									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="44"
										height="44"
										viewBox="0 0 44 44"
										fill="none">
										<g clipPath="url(#clip0_1_4257)">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M12.5714 22C12.5714 23.7358 11.1643 25.1429 9.42858 25.1429C7.69283 25.1429 6.28572 23.7358 6.28572 22C6.28572 20.2643 7.69283 18.8572 9.42858 18.8572C11.1643 18.8572 12.5714 20.2643 12.5714 22ZM25.1429 22C25.1429 23.7358 23.7358 25.1429 22 25.1429C20.2643 25.1429 18.8572 23.7358 18.8572 22C18.8572 20.2643 20.2643 18.8572 22 18.8572C23.7358 18.8572 25.1429 20.2643 25.1429 22ZM34.5714 25.1429C36.3072 25.1429 37.7143 23.7358 37.7143 22C37.7143 20.2643 36.3072 18.8572 34.5714 18.8572C32.8357 18.8572 31.4286 20.2643 31.4286 22C31.4286 23.7358 32.8357 25.1429 34.5714 25.1429Z"
												fill="white"
											/>
										</g>
										<defs>
											<clipPath id="clip0_1_4257">
												<rect width="44" height="44" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</div>

								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "12px",
									}}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="23"
										height="23"
										viewBox="0 0 23 23"
										fill="none">
										<path
											d="M17.0881 16.0684L21.2696 20.4797C21.6711 20.9033 21.6582 21.5818 21.2408 21.989C20.8299 22.3898 20.1811 22.3768 19.7859 21.9596L15.6013 17.5434C14.1789 18.6372 12.5749 19.239 10.7894 19.349C9.59632 19.4225 8.44086 19.2568 7.32304 18.8519C6.20522 18.4471 5.23006 17.8699 4.39755 17.1205C3.56504 16.3711 2.88397 15.4572 2.35435 14.379C1.82472 13.3007 1.52444 12.1558 1.45352 10.9445C1.38259 9.73316 1.5472 8.55971 1.94733 7.42414C2.34746 6.28858 2.91706 5.29768 3.65612 4.45146C4.39518 3.60524 5.29603 2.91255 6.35867 2.3734C7.42131 1.83424 8.54915 1.52792 9.74218 1.45443C10.9352 1.38095 12.0907 1.54663 13.2085 1.95148C14.3264 2.35633 15.3016 2.93346 16.134 3.68289C16.9665 4.43231 17.6475 5.34617 18.1772 6.42446C18.7069 7.50276 19.0072 8.64758 19.0781 9.85892C19.1231 10.6275 19.0724 11.3852 18.9262 12.132C18.78 12.8788 18.5506 13.5805 18.2381 14.2369C17.9255 14.8934 17.5422 15.5039 17.0881 16.0684ZM10.6663 17.2437C11.5796 17.1874 12.4411 16.952 13.2509 16.5374C14.0606 16.1228 14.748 15.5921 15.3129 14.9452C15.8779 14.2984 16.3146 13.5421 16.6232 12.6763C16.9317 11.8104 17.0589 10.9139 17.0046 9.98658C16.9504 9.05929 16.7196 8.18477 16.3122 7.36305C15.9049 6.54132 15.3831 5.84402 14.7468 5.27115C14.1105 4.69828 13.3662 4.25575 12.5138 3.94356C11.6615 3.63136 10.7787 3.50339 9.86543 3.55964C8.95212 3.6159 8.09058 3.85131 7.2808 4.26588C6.47103 4.68046 5.78365 5.21119 5.21868 5.85808C4.65372 6.50498 4.21697 7.2613 3.90844 8.12706C3.59992 8.99281 3.47279 9.88937 3.52706 10.8167C3.58133 11.7441 3.81211 12.6186 4.21938 13.4403C4.62666 14.2619 5.1485 14.9592 5.78488 15.5321C6.42127 16.105 7.16558 16.5475 8.01783 16.8597C8.87007 17.1719 9.75288 17.2999 10.6663 17.2437Z"
											fill="white"
										/>
									</svg>
									<input
										type="search"
										style={{
											background: "none",
											border: "none",
											borderBottom: "1px solid white",
											outline: "none",
											color: "white",
											fontSize: "18px",
										}}
									/>
								</div>
							</div>

							<div>
								<Table
									hover
									variant="dark"
									size="sm"
									style={{ fontSize: "14px" }}>
									<thead>
										<tr>
											<th></th>
											<th>#</th>
											<th>TITLE</th>
											<th>ALBUM</th>
											<th></th>
											<th>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="28"
													height="28"
													viewBox="0 0 28 28"
													fill="none">
													<g clipPath="url(#clip0_119_630)">
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M23 14C23 18.9706 18.9706 23 14 23C9.02944 23 5 18.9706 5 14C5 9.02944 9.02944 5 14 5C18.9706 5 23 9.02944 23 14ZM25 14C25 20.0751 20.0751 25 14 25C7.92487 25 3 20.0751 3 14C3 7.92487 7.92487 3 14 3C20.0751 3 25 7.92487 25 14ZM14.5 8.5H12.5V15.5H18V13.5H14.5V8.5Z"
															fill="#B3B3B3"
														/>
													</g>
													<defs>
														<clipPath id="clip0_119_630">
															<rect width="28" height="28" fill="white" />
														</clipPath>
													</defs>
												</svg>
											</th>
										</tr>
									</thead>
									{music.map((music, index) => (
										<tbody key={music.track.id}>
											<tr>
												<td style={{ textAlign: "center", paddingTop: "18px" }}>
													{index + 1}
												</td>
												<td>
													<div
														style={{
															display: "flex",
															alignItems: "center",
															gap: "10px",
														}}>
														<img
															src={music.track.album.images[0].url}
															alt=""
															width={52}
															height={52}
														/>
														<span
															style={{
																display: "flex",
																flexDirection: "column",
															}}>
															<span style={{ width: "100px" }}>
																{music.track.name.slice(0, 25)}
															</span>
															<span style={{ fontSize: "12px", color: "gray" }}>
																{music.track.artists[0].name}
															</span>
														</span>
													</div>
												</td>
												<td style={{ paddingTop: "18px", width: "100px" }}>
													{music.track.album.name.slice(0, 25) + "..."}
												</td>
												<td>
													<AudioPlayer
														style={{
															width: "100%",
															background: "none",
															color: "white",
														}}
														src={music.track.preview_url}
														onPlay={(e) => console.log("onPlay")}
														// other props here
													/>
												</td>

												<td style={{ paddingTop: "18px" }}>
													<input
														type="checkbox"
														className="classjon"
														id={music.track.name + music.track.id}
													/>
													<label htmlFor={music.track.name + music.track.id}>
														<FaHeart className="dislike" />
														<FaHeart className="like" />
													</label>
												</td>
												<td style={{ paddingTop: "18px" }}>
													{"0" +
														Math.floor(music.track.duration_ms / 60000) +
														":" +
														((music.track.duration_ms % 60000) / 1000).toFixed(
															0
														)}
												</td>
											</tr>
										</tbody>
									))}
								</Table>
							</div>
						</div>
					</section>
				</div>
				<AsideRight />
			</div>
			<AudioPlayer />
		</div>
	);
};

export default Likes;
