import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './testimonies.css';

const Testimonials = () => {
  const videoRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Initialize isPlaying state
  useEffect(() => {
    setIsPlaying(new Array(testimonials.length).fill(false));
  }, []);

  const handlePlayVideo = (index) => {
    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause();
        setIsPlaying(prev => {
          const newState = [...prev];
          newState[i] = false;
          return newState;
        });
      }
    });

    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
      setIsPlaying(prev => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
    } else {
      video.pause();
      setIsPlaying(prev => {
        const newState = [...prev];
        newState[index] = false;
        return newState;
      });
    }
  };

  const openModal = (index) => {
    setActiveVideo(index);
    setModalOpen(true);
    // Pause all videos when opening modal
    videoRefs.current.forEach(video => {
      if (video) video.pause();
    });
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveVideo(null);
  };

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      video: "/videos/video5.mp4",
      title: " From chronic back pain and knee pain to renewed movement ",
      description: "Neetu's story is one of hope. See how energy healing dissolves prolonged physical discomfort."
    },
    {
      id: 2,
      video: "/videos/video4.mp4",
      title: "Consumed and restless by the fatigue of constant knee pain",
      description: "Pooja is witness to relief and healing. Energy healing a one stop solution to gaining freedom from physical discomfort."
    },
    {
      id: 3,
      video: "/videos/video3.mp4",
      title: "Experience the divine flow of energy",
      description: "Flow of energy through the body with Saruch. The calm and peace of finding the right energy balance within the body."
    },
    {
      id: 4,
      video: "/videos/Video8.mp4",
      title: "Hear Preeti’s story as she experiences",
      description: "Peace and calm within herself. Her story of experiencing an energy that goes beyond conventional restoration."
    },
    {
      id: 5,
      video: "/videos/video1.mp4",
      title: " Meera, once overwhelmed by stress and tiredness,",
      description: "Found balance through energy. Experience how subtle shifts in energy brought her back to strength and stability."
    },
    {
      id: 6,
      video: "/videos/Video9.mp4",
      title: "Sakshi a young aspiring student shares her insights",
      description: "how she experienced the positive energy through her body. How Pranic healing helped her restore physical differences within her body. "
    },
    {
      id: 7,
      video: "/videos/Video7.mp4",
      title: "Be it professional stress or emotional burnout ",
      description: "Dr Tushar shares his insights on how Pranic Healing is helpful for people in all walks of their professional lives."
    },
    {
      id: 8,
      video: "/videos/Video6.mp4",
      title: "Wrishit, once overwhelmed by stress and burnout",
      description: "found balance through energy. Experience how subtle shifts in energy brought him back to strength and stability"
    },
    

  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="test-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.div 
        className="test-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="/images/testimonies1.png" 
          alt="Pranic Healing Testimonials" 
          className="test-hero-image" 
        />
        <div className="test-hero-overlay"></div>
        <motion.div 
          className="test-hero-content"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="test-hero-title">TESTIMONIES</h1>
          <p className="test-hero-subtitle">Real experiences from our healing community</p>
        </motion.div>
      </motion.div>
{/* Testimonials Container */}
<motion.div 
  className="test-container"
  variants={containerVariants}
>
  <motion.div 
    className="test-header"
    variants={itemVariants}
  >
    <div className="test-header-content">
      <h2 className="test-main-title">Hear what people say about their experiences</h2>
      <div className="test-description-container">
        <p className="test-header-description">
          At Radiaant, we believe healing is more than just recovery — it's a journey toward inner peace, clarity, and purpose. Over the years, people from all walks of life have walked through our doors seeking change, and what they've found is transformation.
        </p>
        <p className="test-header-description">
          Through Pranic Healing, many have experienced emotional balance, physical relief, mental stillness, and spiritual awakening. Their testimonials are more than words — they are living proof of the power of energy, intention, and guided healing.
        </p>
        <p className="test-header-description">
          We invite you to read their stories, feel their journeys, and discover how Raadiant has become a trusted space for growth, healing, and light.
        </p>
      </div>
    </div>
  </motion.div>
</motion.div>

        <motion.div 
          className="test-grid"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="test-card"
              variants={itemVariants}
              whileHover="hover"
              onClick={() => openModal(index)}
            >
              <div className="test-video-container">
                <video
                  ref={el => videoRefs.current[index] = el}
                  className="test-video"
                  poster="/images/radiant_logo.jpg"
                  preload="metadata"
                  loop
                  muted
                >
                  <source src={testimonial.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="test-play-overlay">
                  <div className="test-play-circle">
                    <svg className="test-play-icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="test-content">
                <h3 className="test-card-title">{testimonial.title}</h3>
                <p className="test-card-description">{testimonial.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      {/* </motion.div> */}

      {/* Video Modal */}
      <AnimatePresence>
        {modalOpen && activeVideo !== null && (
          <motion.div 
            className="test-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="test-modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="test-modal-close" onClick={closeModal}>
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </button>
              <video
                className="test-modal-video"
                controls
                autoPlay
                src={testimonials[activeVideo].video}
              />
              <div className="test-modal-info">
                <h3>{testimonials[activeVideo].title}</h3>
                <p>{testimonials[activeVideo].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Testimonials;