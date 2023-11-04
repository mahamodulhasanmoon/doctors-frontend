import { useRef, useState } from "react";

const VideoPlayer = () => {
  // Extracted file ID from your provided link
  const fileId = "1eidRZBAdRq8jmwud65fBPLAaQkehBPIy";
  // Direct video URL using the file ID
  const videoUrl = `https://drive.google.com/uc?id=${fileId}`;

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

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
          height="auto" // Adjust the height to be auto to maintain aspect ratio
          controls={false} // We are creating custom controls
          onClick={togglePlayPause}
          // Optionally, add a poster attribute if you have a poster image
          // poster="URL_TO_YOUR_POSTER_IMAGE"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && ( // Show the play button if the video is not playing
          <button
            onClick={togglePlayPause}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-black bg-opacity-70 rounded-full p-2"
            aria-label="Play video"
          >
            {/* SVG for the play button */}
            
          </button>
        )}
        {isPlaying && ( // Show the pause icon if the video is playing
          <div
            onClick={togglePlayPause}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white text-4xl"
          >
            ❚❚
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
// import  { useRef, useEffect } from "react";

// const VideoPlayer = () => {
//   const fileId = "1eidRZBAdRq8jmwud65fBPLAaQkehBPIy";
//   const videoUrl = `https://drive.google.com/uc?id=${fileId}`;

//   const videoRef = useRef(null);

//   useEffect(() => {
//     // Try to play video as soon as the component is mounted
//     const videoElement = videoRef.current;
//     if (videoElement) {
//       videoElement.play().catch((error) => {
//         // Auto-play was prevented
//         // Show a play button to the user or mute the video by default
//         console.error("Video play failed:", error);
//         // Here you could update state to show a play button
//         // or you could just mute the video by default and play
//         videoElement.muted = true;
//         videoElement.play(); // Attempt to play again with the video muted
//       });
//     }
//   }, []);

//   // The file name isn't actually used in the video tag, but you can add it to the title or aria-label for accessibility
//   const videoTitle = "Dr. Phil Chiropractor";

//   return (
    
//     <div className="video-container" style={{ maxWidth: "400px" }}>
//       <video
//         ref={videoRef}
//         width="75%"
//         height="auto"
//         controls
//         autoPlay
//         title={videoTitle}
//         aria-label={videoTitle}
//         // Looping the video for continuous play
//         loop
//         // Preloading the video for faster start
//         preload="auto"
//         // Playing muted by default can increase the chance that the video will auto-play
//         muted
//       >
//         <source src={videoUrl} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default VideoPlayer;

