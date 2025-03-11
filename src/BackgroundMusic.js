import React, { useEffect, useRef } from 'react';
import backgroundMusic from './1.mp3';

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true;
      audioRef.current.play().catch(error => {
        console.error("error", error);
      });
    }
  
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
      }
      document.removeEventListener('click', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src={backgroundMusic} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;
