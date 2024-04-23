import React, { useEffect } from "react";
import "./Home.scss";
import AsideLeft from "../../components/Aside-left/AsideLeft";
import AsideRight from "../../components/Aside-right/AsideRight";
import AudioPlayer from "../../components/Player/AudioPlayer";

import { useMixesStore } from "../../app/mixesStore";
import { Link } from "react-router-dom";

const Home = () => {
	const {
		loading,
		mixes,
		topMixes,
		madeforyou,
		recentlyplayed,
		jumpbackin,
		uniquelyyours,
		error,
		getPlaylists,
		yourTopMixes,
		madeForYou,
		recentlyPlayed,
		jumpBackIn,
		uniquelyYours,
		getToken,
	} = useMixesStore();

	useEffect(() => {
		getToken();
		getPlaylists();
		yourTopMixes();
		madeForYou();
		recentlyPlayed();
		jumpBackIn();
		uniquelyYours();
	}, []);

	return (
		<div>
			<div className="home">
				<AsideLeft />
				<div className="main">
					<section className="home-header">
						<div className="container">
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

					<section className="home-hero">
						<div className="container">
							<h3>Good Afternoon</h3>
							{loading && <h3>Loading...</h3>}
							{error && <h3>Error</h3>}

							<div className="suggested-mixes-wrapper">
								{mixes.length > 0 &&
									mixes.map((mix) => (
										<Link
											to={`/playlist/${mix.id}`}
											className="suggested-mixes">
											<div className="suggested-mix-box"></div>
											<div key={mix.id} className="suggested-mix">
												<img src={mix.images[0].url} alt="" />
												<span style={{ fontSize: "12px" }}>{mix.name}</span>
											</div>
										</Link>
									))}
							</div>
						</div>
					</section>

					{/* YOUR TOP MIXES */}
					<section className="mixes">
						<div className="container">
							<div className="heading">
								<h3>Your Top Mixes</h3>
								<h6>See All</h6>
							</div>

							<div className="cards-box">
								{topMixes.length > 0 &&
									topMixes.map((topMix) => (
										<Link to={`/playlist/${topMix.id}`} className="cardd">
											<div className="card-box"></div>
											<div key={topMix.id} className="card-content">
												<img src={topMix.images[0].url} alt="" />
												<h4>{topMix.name}</h4>
												<p>{topMix.description}</p>
											</div>
										</Link>
									))}
							</div>
						</div>
					</section>

					{/* MADE FOR YOU */}
					<section className="mixes">
						<div className="container">
							<div className="heading">
								<h3>Made For You</h3>
								<h6>See All</h6>
							</div>

							<div className="cards-box">
								{madeforyou.length > 0 &&
									madeforyou.map((madefor) => (
										<Link to={`/playlist/${madefor.id}`} className="cardd">
											<div className="card-box"></div>
											<div key={madefor.id} className="card-content">
												<img src={madefor.images[0].url} alt="" />
												<h4>{madefor.name}</h4>
												<p>{madefor.description}</p>
											</div>
										</Link>
									))}
							</div>
						</div>
					</section>

					{/* RECENTLY PLAYED */}
					<section className="mixes">
						<div className="container">
							<div className="heading">
								<h3>Recently Played</h3>
								<h6>See All</h6>
							</div>

							<div className="cards-box">
								{recentlyplayed.length > 0 &&
									recentlyplayed.map((recent) => (
										<Link to={`/playlist/${recent.id}`} className="cardd">
											<div className="card-box"></div>
											<div key={recent.id} className="card-content">
												<img src={recent.images[0].url} alt="" />
												<h4>{recent.name}</h4>
												<p>{recent.description}</p>
											</div>
										</Link>
									))}
							</div>
						</div>
					</section>

					{/* JUMP BACK IN */}
					<section className="mixes">
						<div className="container">
							<div className="heading">
								<h3>Jump Back In</h3>
								<h6>See All</h6>
							</div>

							<div className="cards-box">
								{jumpbackin.length > 0 &&
									jumpbackin.map((jumpbackin) => (
										<Link to={`/playlist/${jumpbackin.id}`} className="cardd">
											<div className="card-box"></div>
											<div key={jumpbackin.id} className="card-content">
												<img src={jumpbackin.images[0].url} alt="" />
												<h4>{jumpbackin.name}</h4>
												<p>{jumpbackin.description}</p>
											</div>
										</Link>
									))}
							</div>
						</div>
					</section>

					{/* UNIQUELY YOURS */}
					<section className="mixes">
						<div className="container">
							<div className="heading">
								<h3>Uniquely Yours</h3>
								<h6>See All</h6>
							</div>

							<div className="cards-box">
								{uniquelyyours.length > 0 &&
									uniquelyyours.map((uniquelyyours) => (
										<Link
											to={`/playlist/${uniquelyyours.id}`}
											className="cardd">
											<div className="card-box"></div>
											<div key={uniquelyyours.id} className="card-content">
												<img src={uniquelyyours.images[0].url} alt="" />
												<h4>{uniquelyyours.name}</h4>
												<p>{uniquelyyours.description}</p>
											</div>
										</Link>
									))}
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

export default Home;
