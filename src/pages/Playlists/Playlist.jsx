import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
	ads,
	likesIcon,
	pause,
	play,
	profilePic,
} from "../../assets/images/images";
import ReactAudioPlayer from "react-audio-player";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Playlist = ({ index, music, liked, handleAddToFavorites }) => {
	////////////////////////////////////////////////

	const [isPlaying, setIsPlaying] = useState(false);
	const [audioFileName, setAudioFileName] = useState("");

	////////////////////////////////////////////////

	const handlePlayPause = () => {
		if (isPlaying) {
			// wavesurfer.current.pause();
			setIsPlaying(false);
		} else {
			// wavesurfer.current.play();
			setIsPlaying(true);
		}
	};

	return (
		<React.Fragment>
			<tbody key={music.id}>
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
								<span style={{ width: "100px" }}>{music.track.name.slice(0, 25)}</span>
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
							<FaRegHeart className="dislike" />
							<FaHeart className="like" />
						</label>
					</td>
					<td style={{ paddingTop: "18px" }}>
						{"0" +
							Math.floor(music.track.duration_ms / 60000) +
							":" +
							((music.track.duration_ms % 60000) / 1000).toFixed(0)}
					</td>
				</tr>
			</tbody>
		</React.Fragment>
	);
};

export default Playlist;
