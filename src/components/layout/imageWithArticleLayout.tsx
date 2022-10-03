import React from "react";
import "./style.css";


interface ImageWithAticleLayoutProps{
    image: string;
    children: React.ReactNode;
    imageStayLeft?: boolean;
}
const ImageWithAticleLayout: React.FC<ImageWithAticleLayoutProps> = (props) => {
    const {image, children, imageStayLeft = true} = props;
    return (
        <div>
            {
                imageStayLeft ? (
                   <>
                    <div className="image-with-article-layout">
                    <div className="image">
                    <img src={image} alt="picture" />
                    </div>
                </div>
                <div className="article">
                {children}
                </div>
                   </>
                ) : (
                    <>
                     <div className="image-with-article-layout">
                    <div className="image">
                    <img src={image} alt="picture" />
                    </div>
                </div>
                <div className="article">
                {children}
                </div>
                    </>
                )
            }
        </div>
    )
};
export default ImageWithAticleLayout;