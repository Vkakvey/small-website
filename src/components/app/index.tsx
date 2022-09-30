import React from "react";
import "./index.css";
import DefaultLayout from "../layout/DefaultLayout";
import Nav from "../nav";
import Hero from "../hero";

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
    </div>
    {/* About */}
    {/* End of about */}

    {/* Menu */}
    {/* End of menu */}

    {/* Contact */}
    {/* End of Contact */}

    {/* Footer */}
    {/* End of footer */}
    </DefaultLayout> 
  )
} 
export default App;
