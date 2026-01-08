"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function VideoSection({ data }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <section className="w-full h-auto block">
      <div className="container">
        <div className="w-full h-[220px] sm:h-auto aspect-[1720/720] rounded-[5px] overflow-hidden block relative z-0">
          <video
            ref={videoRef}
            onClick={togglePlay}
            playsInline
            src={data?.video}
            poster={data?.videoThumbnail}
            className="w-full h-full object-cover cursor-pointer"
          />
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="play-ripple w-[50px] sm:w-[70px] lg:w-[100px] 2xl:w-[120px] 3xl:w-[150px] h-auto aspect-square m-auto rounded-full absolute z-1 inset-0 flex items-center justify-center"
              aria-label="Play video"
            >
              <Image src="/images/play_button.svg" alt="Play" width={150} height={150} className="w-full h-full object-cover" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
