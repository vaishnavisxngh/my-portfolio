'use client';

import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { usePortalStore } from "@stores";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MusicToggle = () => {
  const musicToggleRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const isActive = usePortalStore((state) => state.activePortalId);
  const [isPlaying, setIsPlaying] = useState(true);

  useGSAP(() => {
    gsap.to(musicToggleRef.current, {
      opacity: isActive ? 0 : 1,
      duration: 1,
      delay: isActive ? 0 : 1,
    });
  }, [isActive]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/icons/audio.mp3"
        autoPlay
        loop
        preload="auto"
      />
      <div
        ref={musicToggleRef}
        style={{
          position: "fixed",
          top: isMobile ? "2.5rem" : "4rem",
          left: "1.5rem",
          opacity: 0,
          zIndex: 2,
        }}
      >
        <button
          onClick={toggleMusic}
          className="px-4 py-2 rounded-md bg-black/60 text-white hover:bg-black/80 transition shadow-md shadow-black/20 ">
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </>
  );
};

export default MusicToggle;
