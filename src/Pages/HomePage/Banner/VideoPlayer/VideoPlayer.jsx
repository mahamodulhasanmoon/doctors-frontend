import { useRef, useState, useEffect } from "react";

const VideoPlayer = () => {
  // Extracted file ID from your provided link
  const fileId = "1eidRZBAdRq8jmwud65fBPLAaQkehBPIy";
  // Direct video URL using the file ID
  const videoUrl = `https://drive.google.com/uc?id=${fileId}`;

  const [isPlaying, setIsPlaying] = useState(true); // Set isPlaying to true for autoplay
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.muted = true; // Mute the video by default
      videoElement.play().catch((error) => {
        // Auto-play was prevented
        console.error("Video play failed:", error);
        // Handle autoplay failure here
      });
    }
  }, []);

  const togglePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement.paused || videoElement.ended) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex justify-center my-12 items-center h-auto lg:h-screen">
      <div style={{ position: "relative", width: "75%" }}>
        <video
          ref={videoRef}
          width="100%"
          height="auto"
          onClick={togglePlayPause}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
    </div>
  );
};

export default VideoPlayer;
