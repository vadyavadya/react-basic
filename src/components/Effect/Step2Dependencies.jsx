import { useState, useRef, useEffect } from "react";
import style from "./style.module.css";

function VideoPlayerBad({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("Step 2 Calling video.play()");
      ref.current.play();
    } else {
      console.log("Step 2 Calling video.pause()");
      ref.current.pause();
    }
  });

  return <video className={style.video} ref={ref} src={src} loop playsInline />;
}

export default function Step2Dependencies() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");

  return (
      <div className="exemple">
        <div className="" style={{ marginBottom: "1rem" }}>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
        <VideoPlayerBad
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </div>
  );
}

function VideoPlayerGood({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("Step 2 Calling video.play()");
      ref.current.play();
    } else {
      console.log("Step 2 Calling video.pause()");
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video className={style.video} ref={ref} src={src} loop playsInline />;
}

export function Step2DependenciesGood() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");

  return (
      <div className="exemple">
        <div className="" style={{ marginBottom: "1rem" }}>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
        <VideoPlayerGood
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </div>
  );
}