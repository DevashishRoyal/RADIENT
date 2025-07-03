import AboutHero from "../../components/AboutHero/AboutHero.jsx"
import AboutContent from "../../components/AboutContent/AboutContent.jsx"
import TeamSection from "../../components/TeamSection/TeamSection.jsx"
import "./About.css"

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutContent />
      <TeamSection />
    </div>
  )
}

export default About
