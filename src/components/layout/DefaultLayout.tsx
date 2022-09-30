import React from "react";
import "./style.css"


interface DefaultLayoutProps {
    children:React.ReactNode
}
const DefaultLayout: React.FC<DefaultLayoutProps>= (props) => {
    return(
        <div className="container">

         {props.children}

        </div>
    )
}
export default DefaultLayout;