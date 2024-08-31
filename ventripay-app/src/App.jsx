import AboutUs from "./components/AboutUs";
import Benefits from "./components/Benefits";
import CardBenefits from "./components/CardBenefits";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div>
       <NavBar/>
       <Hero/>
       <Partners/>
       <Features/>
       <Benefits/>
       <CardBenefits/>
       <AboutUs/>
       <Testimonials/>
       <Newsletter/>
    </div>
   
  )
}