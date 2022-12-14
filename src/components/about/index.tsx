import React from "react";
import "./index.css";
import ImageWithAticleLayout from "../layout/imageWithArticleLayout";
interface AboutProps {}
const About: React.FC<AboutProps> = (props) => {
    const {} = props;
    return (
        <ImageWithAticleLayout image="/img/tablesetting2.jpg">
               <div className="bg-article">
                <h1 className="big-title">About Catering</h1>
                <p className="small-title">Tradition since 1889</p>
                <p className="p-normal">
                    The Catering was founded in blabla by Mr. 
                    Smith in lorem ipsum dolor sit amet,
                    consectetur adipiscing elit consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut {""}
                    <span> seasonal </span> ingredients.</p>
                    <p className="p-gray">Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim
                    id est laborum consectetur adipiscing elit, 
                    sed do eiusmod temporincididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi
                     ut aliquip ex ea commodo consequat.</p>
                     </div>
        </ImageWithAticleLayout>
    );
};
 export default About;