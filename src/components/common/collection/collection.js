import React from "react";
import "./collection.css";
import Slider from "react-slick";
import NextArrow from "../carousel/nextArrow";
import PreviousArrow from "../carousel/previousArrow";
const settings = {
    
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PreviousArrow/>,
  };
const Collection = ({ list }) => {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title"> Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Mumbai, based on trends
          </div>
          <div className="collection-location">All Collections in Mumbai
          <i className="fi fi-rr-caret-right absolute center"/></div>
         
        </div>
      
      <Slider {...settings}>
        {list.map((item) => (
            <div>
                <div className="collection-cover">
                    <img src={item.cover} className="collection-image" alt={item.title}/>
                    <div className="gradient-bg"></div>
                    <div className="collection-card-title">{item.title}</div>
                    <div className="collection-card-subtitle absolute-center">
                        <div >{item.places} Places</div>
                        <i className="fi fi-rr-caret-right absolute center"></i>
                    </div>
                </div>
            </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Collection;
