import Destinations from "./components/Destinations"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Reservation from "./components/Reservation"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"


const App = () => {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <Services />
      <Gallery />
      <Testimonials />
      <Reservation />
    </div>
  )
}

export default App