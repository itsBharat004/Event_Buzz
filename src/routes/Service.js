import Hero from "../Components/Hero";
 import image3 from "../assets/Services.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PresentIn from "../Components/PresentIn";
export default function Service(){
    return (
        <>
         <Navbar/>
         <Hero
        heroImg={image3}
        title=""
        text=""
        url="/Service"
      />
      <PresentIn/>
      <Footer/>
        </>
    )
    }