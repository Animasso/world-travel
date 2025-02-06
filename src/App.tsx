import Destinations from "./components/Destinations"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"


const App = () => {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <Services />
    </div>
  )
}

export default App