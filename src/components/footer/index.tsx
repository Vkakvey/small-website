import React from "react";
import "./index.css"
interface FooterProps{}

const Footer: React.FC<FooterProps> = () => {
    return (
       <div className="footer">
        <p>Powered by <a title="w3.css" href="https://www.w3schools.com/" target={"_blank"}>w3.css</a></p>
       </div>
    )
}


export default Footer;