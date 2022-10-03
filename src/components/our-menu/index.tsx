import React from "react";
import ImageWithAticleLayout from "../layout/imageWithArticleLayout";
import "./index.css";




const ourMenu = [
    {
        title: "Bread Basket",
        discriptios: 'Assortment of fresh baked fruit breads and muffins 5.50'
    },
    {
        title: "Honey Almond Granola with Fruits",
        discriptios: 'Natural cereal of honey toasted oats, raisins, almonds and dates 7.00'
    },
    {
        title: "Belgian Waffle",
        discriptios: 'Vanilla flavored batter with malted flour 7.50'
    },
    {
        title: "Scrambled eggs",
        discriptios: 'With syrup, butter and lots of berries 8.50'
    }
]
interface OurMenuProps{}
const OurMenu: React.FC<OurMenuProps> = (props) => {
    const {} = props;
    return (
        <ImageWithAticleLayout image="./img/tablesetting.jpg" imageStayLeft={false}>
            <div className="bg-article">
                <h1 className="big-title">Our Menu</h1>

                <div className="lish-our-menu">
                    {
                        ourMenu.map((item, index) =>(
                            <div className="our-menu" key={index}>
                            <h3 className="menu-title">
                             {item.title}
                            <p className="menu-discriptios">
                                {item.discriptios}
                       </p>
                    </h3>
                </div>
                        )
                            
                    ) 
                    }
                </div>
            </div>
        </ImageWithAticleLayout>
    )
}
export default OurMenu;