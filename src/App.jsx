import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import Courses from "./pages/Courses/Courses.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import "./App.css"
import TestimonialsSection from "./pages/testimonies/testimonies.jsx"
import AshramSection from "./pages/Ashram/Ashram.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/testimonies" element={<TestimonialsSection />} />
          <Route path="/ashram" element={<AshramSection />} />

        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
