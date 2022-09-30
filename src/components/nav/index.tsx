import React from "react";
import "./index.css";
interface Navprops{}
const menubar = [
    {
      link:"#about",
      label:"About",
    },
    {
        link:"#menu",
        label:"Menu",
    },
    {
        link:"#contact",
        label:"Contact",
    }

];
const Nav: React.FC<Navprops> = (props) => {
    const {} = props;
    console.log("HELLO MENU BAR: ", menubar);
    
    return (
        <nav>
            <a href="#" className="logo">Food Website</a>
            {/* <ul>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#menu">Menu</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            </ul> */}

            <ul>
                {menubar.map((items, index) => (
                    <li key={index}>
                        <a href={items.link}>{items.label}</a>
                    </li>
                  ))}
            </ul>
        </nav>
    )
} 
export default Nav;