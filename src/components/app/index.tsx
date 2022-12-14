import React from "react";
import "./index.css";
import DefaultLayout from "../layout/DefaultLayout";
import Nav from "../nav";
import Hero from "../hero";
import About from "../about";
import OurMenu from "../our-menu";
import Contact from "../contact/indedx";
import Footer from "../footer";
const App:React.FC = () => {
  return (
    
    <DefaultLayout>
    {/* Nav */}
     <Nav/>
    {/* End of nav */}
    <div className="content">
       {/* Hero */}
     <Hero/>
    {/* End of hero */}
    <div className="inside-content">
    {/* About */}
    <About/>
    {/* End of about */}

    <div className="line"></div>

    {/* Menu */}
    <OurMenu/>
    {/* End of menu */}
   </div>
    </div>
    {/* Contact */}
    <Contact/>
    {/* End of Contact */}

    {/* Footer */}
   <Footer/>
    {/* End of footer */}
    </DefaultLayout> 
  )
} 
export default App;
