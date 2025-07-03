import Hero from "../../components/Hero/Hero.jsx"
import Features from "../../components/Features/Features.jsx"
import VideoSection from "../../components/VideoSection/VideoSection.jsx"
import Testimonials from "../../components/Testimonials/Testimonials.jsx"
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <VideoSection />
      <Testimonials />
    </div>
  )
}

export default Home
