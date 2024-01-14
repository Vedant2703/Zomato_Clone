import React from "react";
import Slider from "react-slick";
import './deliveryCollections.css';
import NextArrow from "../../common/carousel/nextArrow";
import PreviousArrow from "../../common/carousel/previousArrow";
import DeliveryItem from "./deliveryItem/deliveryItem";

const deliveryItems = [
    {
        id : 1,
        title:"Pizza",
        cover : "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id : 2,
        title:"Burgar",
        cover : "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    },
    {
        id : 3,
        title:"Ice Cream",
        cover : "https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png",
    },
    {
        id : 4,
        title:"Biryani",
        cover : "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    },
    {
        id : 5,
        title:"Idli",
        cover : "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
    },
    {
        id : 6,
        title:"Rolls",
        cover : "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    },
    {
        id : 7,
        title:"North Indian",
        cover : "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
    },
    {
        id : 8,
        title:"Fried Rice",
        cover : "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
    },
    {
        id : 9,
        title:"Cake",
        cover : "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    },
    {
        id : 10,
        title:"Thali",
        cover : "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    },
    {
        id : 11,
        title:"Noodles",
        cover : "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
    },
    
];

const settings = {
    
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PreviousArrow/>,
  };

const DeliveryCollections = () => {
    return <div className="delivery-collection ">
        <div className="max-width">
            <div className="collection-title"> Eat What Mekse You Happy</div>
            <Slider {...settings}>
                {deliveryItems.map((item) => {
                    return <DeliveryItem item={item}/>
                    
                })}
            </Slider>
        </div>
        
    </div>
}

export default DeliveryCollections;