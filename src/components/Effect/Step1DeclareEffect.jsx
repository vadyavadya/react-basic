import { useState, useRef, useEffect } from 'react';

// ! Пример очень упрощен
// Эффект позволяет вызвать функции видео после рендера, без него былла бы ошибка 
function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}

export default function Step1DeclareEffect() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button style={{marginBottom:'1rem'}} onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <br />
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
