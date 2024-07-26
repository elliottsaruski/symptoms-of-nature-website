import WavesurferPlayer from "@wavesurfer/react";
import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaBackward, FaForward } from "react-icons/fa6";
import { IoIosVolumeHigh } from "react-icons/io";

// import sampleAudio from "../assets/media/music/OD on caffeine.wav";

import { AudioPlayerData } from "../data/AudioPlayerData";

function WavesurferComponent() {
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [nowPlaying, setNowPlaying] = useState(0);

  const [volumeOpen, setVolumeOpen] = useState(false);

  // const audioSRC = AudioPlayerData.map(() => {});

  const onReady = (ws) => {
    setWavesurfer(ws);
    setIsPlaying(false);
    // DEBUG
    // console.log(`${AudioPlayerData.length - 1}`);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  const handleNextSong = () => {
    const nextIndex =
      nowPlaying >= AudioPlayerData.length - 1 ? 0 : nowPlaying + 1;
    setNowPlaying(nextIndex);
    // wavesurfer.load(AudioPlayerData[nextIndex].src);
  };

  const handlePrevSong = () => {
    const prevIndex =
      nowPlaying === 0 ? AudioPlayerData.length - 1 : nowPlaying - 1;
    setNowPlaying(prevIndex);
    // wavesurfer.load(AudioPlayerData[prevIndex].src);
  };

  return (
    <div className="audio-player-wrapper">
      <div className="wavesurfer-wrapper">
        <WavesurferPlayer
          height={35}
          waveColor="#ef4923"
          cursorWidth={0}
          barWidth={4}
          barGap={0}
          barRadius={null}
          // minPxPerSec={486}
          fillParent={true}
          // hideScrollbar={true}
          // autoScroll={true}
          url={AudioPlayerData[nowPlaying].src}
          onReady={onReady}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>

      {/* <hr /> */}

      <div className="audio-controls">
        <button onClick={handlePrevSong}>
          <FaBackward />
        </button>

        <button onClick={onPlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button onClick={handleNextSong}>
          <FaForward />
        </button>

        <div className="volume-wrapper">
          <IoIosVolumeHigh onClick={() => setVolumeOpen(!volumeOpen)} />
          <input
            className={volumeOpen ? "volume-open" : "volume-closed"}
            type="range"
            max={1}
            defaultValue={1}
            min={0}
            step={0.1}
            onChange={(e) => {
              wavesurfer.setVolume(e.target.value);
            }}
          />
        </div>
        <div className="audio-title">
          <p>np:</p>
          {AudioPlayerData[nowPlaying].title} -{" "}
          {AudioPlayerData[nowPlaying].artist}
        </div>
      </div>
    </div>
  );
}

export default WavesurferComponent;
