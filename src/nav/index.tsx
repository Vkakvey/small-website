import React from "react";
import "./index.css";
interface Navprops{}
const Nav: React.FC<Navprops> = (props) => {
    const {} = props;
    return (
        <nav>
            <a href="#" className="logo">Food Website</a>
            <ul>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li>
                <a href="#">Menu</a>
            </li>
            </ul>
        </nav>
    )
} 
export default Nav;