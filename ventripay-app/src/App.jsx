import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Partners from "./components/Partners";

export default function App() {
  return (
    <div>
       <NavBar/>
       <Hero/>
       <Partners/>
       <Features/>
       <Benefits/>
    </div>
   
  )
}