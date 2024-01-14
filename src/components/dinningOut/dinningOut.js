import React from "react";
import "./dinningOut.css";
import Collection from "../common/collection/collection";
import Filters from "../common/filters/filters";
import { diningList } from "../../data/dining";
import ExploreSection from "../common/exploreSection/exploreSection";

export const collectionList = [
  {
    id: "1",
    title : "14 Places for Parents' Day Out!",
    cover : "https://b.zmtcdn.com/data/collections/2921744ae263d0c36fb366ec45f6222f_1690075422.png",
    places :"13"
  },
  {
    id: "2",
    title : "6 Unique Dining Experiences",
    cover : "	https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
    places :"6"
  },
  {
    id: "3",
    title : "16 Best Insta-worthy Places",
    cover : "	https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252747.jpg",
    places :"15"
  },
  {
    id: "4",
    title : "16 Best Restaurants",
    cover : "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674824266.jpg",
    places :"15"
  },
  {
    id: "5",
    title : "19 Newly Opened Restaurants",
    cover : "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674824266.jpg",
    places :"15"
  },
  {
    id: "6",
    title : "13 Sea View Dining Places",
    cover : "https://b.zmtcdn.com/data/collections/1b191329f2c37a474c428131841d488b_1674826227.jpg",
    places :"13"
  },
  {
    id: "7",
    title : "10 Trending Restaurants ",
    cover : "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247359.jpg",
    places :"13"
  },
  {
    id: "8",
    title : "14 Romantic Dining Places",
    cover : "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674824128.jpg",
    places :"13"
  },

];
const diningOutFilters= [
  {
    id:1,
    icon : <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title : "Filters",
  },
  {
    id:2,
    title : "Rating 4.0+",
  },
  {
    id:3,
    title : "Safe and Hygenic",
  },
  {
    id:4,
    title : "Pure Veg",
  },
  {
    id:5,
    icon : <i className="fi fi-rr-apps-sort absolute-center "></i>,
    title : "Delivery Time",
  },
  {
    id:6,
    title : "Great Offers",
  },
  {
    id:7,
    icon : <img className=" absolute-center " src="https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png" alt="gold"></img>,
    title : "Gold",
  },
];
const DiningOut = () => {
  return (
    <div>
      <Collection  list={collectionList}/>
      <div className="max-width">
      <Filters filterList={diningOutFilters} />
      </div>
      <ExploreSection list ={diningList} collectionName='Trending dining restaurants in Kalyan,Mumbai'/>
    </div>
  );
};

export default DiningOut;
