import React, { useRef, useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import {
	ads,
	pause,
	play,
	volumeDown,
	volumeMuted,
	volumeOff,
	volumeUp,
	yulduz,
} from "../../assets/images/images";
import "./AudioPlayer.scss";

const formWaveSurferOptions = (ref) => ({
	container: ref,
	waveColor: "#ccc",
	progressColor: "#0178ff",
	cursorColor: "transparent",
	backend: "WebAudio",
	cursorWidth: 0,
	height: 100,
	responsive: true,
	normalize: true,
	scrollParent: true,
	fillParent: true,
	hideScrollbar: true,
	barWidth: 10,
	barHeight: 10,
	barGap: 10,
	barRadius: 10,
});

const formatTime = (seconds) => {
	let data = new Date(0);
	data.setSeconds(seconds);
	return data.toISOString().substr(11, 8);
};

const AudioPlayer = () => {
	const waveformRef = useRef(null);
	const wavesurfer = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(0.5);
	const [isMuted, setIsMuted] = useState(false);
	const [audioFileName, setAudioFileName] = useState("");

	useEffect(() => {
		const options = formWaveSurferOptions(waveformRef.current);
		wavesurfer.current = WaveSurfer.create(options);

		wavesurfer.current.load(yulduz);

		wavesurfer.current.on("ready", () => {
			setVolume(wavesurfer.current.getVolume());
			setDuration(wavesurfer.current.getDuration());
			setAudioFileName(yulduz.split("/").pop());
		});

		wavesurfer.current.on("audioprocess", () => {
			setCurrentTime(wavesurfer.current.getCurrentTime());
		});

		return () => {
			wavesurfer.current.un("audioprocess");
			wavesurfer.current.un("ready");
			wavesurfer.current.destroy();
		};
	}, [yulduz]);

	const handlePlayPause = () => {
		if (isPlaying) {
			wavesurfer.current.pause();
			setIsPlaying(false);
		} else {
			wavesurfer.current.play();
			setIsPlaying(true);
		}
	};

	const handleVolumeChange = (newVolume) => {
		setVolume(newVolume);
		wavesurfer.current.setVolume(newVolume);
		setIsMuted(newVolume === 0);
	};

	const handleMute = () => {
		setIsMuted(!isMuted);
		wavesurfer.current.setVolume(isMuted ? volume : 0);
	};

	const handleVolumeUp = () => {
		handleVolumeChange(Math.min(volume + 0.1, 1));
	};

	const handleVolumeDown = () => {
		handleVolumeChange(Math.max(volume - 0.1, 0));
	};

	return (
		<div className="main-wrapper">

			<div className="waveform">
				<div className="fileNameAndPicture">
					<img src={ads} alt="ads" width={70} />
					<span style={{ fontSize: "18px" }}>{audioFileName}</span>
				</div>
				<div>
					<div className="player-section">
						<button onClick={handleVolumeDown}>
							<img src={volumeDown} alt="" width={28} height={28} />
						</button>

						<button onClick={handlePlayPause}>
							{isPlaying ? (
								<img src={pause} alt="" width={50} height={50} />
							) : (
								<img src={play} alt="" width={50} height={50} />
							)}
						</button>

						<button onClick={handleVolumeUp}>
							<img src={volumeUp} alt="" width={28} height={28} />
						</button>
					</div>
					<div className="audio-wave-slider">
						<span>{formatTime(currentTime)}</span>
						<input
							type="range"
							ref={waveformRef}
							min={0}
							max={duration}
							step={0.1}
							value={currentTime}
							onChange={(values) =>
								wavesurfer.current.seekTo(values[0] / duration)
							}
						/>
						<span>{formatTime(duration)}</span>
					</div>
				</div>
				<div className="controls">
					<div>
						<div className="btn-wrapper">
							<button onClick={handleMute}>
								{isMuted ? (
									<img src={volumeOff} width={28} height={28} alt="" />
								) : (
									<img src={volumeMuted} width={28} height={28} alt="" />
								)}
							</button>
							<input
								type="range"
								id="volume"
								name="volume"
								min="0"
								max="1"
								step="0.05"
								value={isMuted ? 0 : volume}
								onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
							/>
							<span>{Math.round(volume * 100)}%</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AudioPlayer;
