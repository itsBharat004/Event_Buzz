import Hero from "../Components/Hero";
//  import image4 from "../assets/Contact.png";
 import image4 from "../assets/Contact.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
export default function Contact(){
    return (
        <>
         <Navbar/>
         <Hero
        heroImg={image4}
        title=""
        text=""
        url="/Contact"
      />
      <ContactForm/>
      <Footer/>
         
        </>
        
    )
    }