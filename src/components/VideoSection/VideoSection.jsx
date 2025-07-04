// import "./VideoSection.css"

// const VideoSection = () => {
//   return (
//     <section className="video-section section">
//       <div className="container">
//         <div className="video-content">
//           <h2>Gentle Healing Videos</h2>
//           <p>Watch our guided sessions and healing techniques</p>

//           <div className="video-container">
//             <div className="video-placeholder">
//               <div className="play-button">
//                 <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
//                   <circle cx="12" cy="12" r="12" fill="#ff0000" />
//                   <polygon points="10,8 16,12 10,16" fill="white" />
//                 </svg>
//               </div>
//               <p>Gentle healing videos</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default VideoSection
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="container">
        <div className="video-content">
          <h2>Gentle Healing Videos</h2>
          <p>Watch our guided sessions and healing techniques</p>
          
          <div className="video-container">
            <iframe
              className="youtube-video"
              src="https://www.youtube.com/embed/7oWnN8F56LE"
              title="Gentle Healing Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;