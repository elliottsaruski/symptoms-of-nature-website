import WavesurferPlayer from "@wavesurfer/react";
import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaBackward, FaForward } from "react-icons/fa6";
import { IoIosVolumeHigh } from "react-icons/io";

import sampleAudio from "../assets/media/music/OD on caffeine.wav";

function WavesurferComponent() {
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (ws) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  return (
    <div className="wavesurfer-wrapper">
      <WavesurferPlayer
        height={100}
        waveColor="#ef4923"
        url={sampleAudio}
        onReady={onReady}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="audio-controls">
        <button>
          <FaBackward />
        </button>

        <button onClick={onPlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button>
          <FaForward />
        </button>

        <div className="volume-wrapper">
          <IoIosVolumeHigh />
          <input type="range" />
        </div>
      </div>
    </div>
  );
}

export default WavesurferComponent;
