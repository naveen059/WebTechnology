import React, { useRef } from "react";

function UseRefExample() {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0; // Reset to the start
  };

  return (
    <div>
      <audio ref={audioRef} src="your-audio-file.mp3" />
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
      <button onClick={stopAudio}>Stop</button>
    </div>
  );
}

export default UseRefExample;
