import React, { useState } from "react";
import Header from "../../components/common/header/header";
import Footer from "../../components/common/footer/footer";
import TabOptions from "../../components/common/tabOptions/tabOptions";
import Delivery from "../../components/delivery/delivery";
import NightLife from "../../components/nightLife/nightLife";
import DiningOut from "../../components/dinningOut/dinningOut";



const HomePage = () => {
  const [activeTab,setActiveTab] = useState('Delivery');
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}
      <Footer />
    
    </div>
  );
};

const getCorrectScreen = (tab) => 
{
    switch(tab) 
    { 
      case "Delivery" :
        return <Delivery/> ;
      case "DiningOut":
        return <DiningOut/> ;
      case "NightLife" :
        return <NightLife/> ;
      default :
       return <Delivery/> ;

    }
         
};

export default HomePage;
