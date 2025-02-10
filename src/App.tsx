import { Toaster } from "react-hot-toast"
import Destinations from "./components/Destinations"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Reservation from "./components/Reservation"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div className=" min-h-screen">
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 5000,
            style: {
              background: "#4caf50",
              color: "#fff",
            },
          },
        }}
      />
      <Navbar />
      <Hero />
      <Destinations />
      <Services />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Footer />

    </div>
  )
}

export default App