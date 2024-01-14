import React from 'react';
import './nightLife.css';
import Collection from '../common/collection/collection';
import { collectionList } from '../dinningOut/dinningOut';
import Filters from '../common/filters/filters';
import { deliveryFilters } from '../delivery/delivery';
import ExploreSection from '../common/exploreSection/exploreSection';
import { nightLifeList } from '../../data/nightLife';
const NightLife = () =>
{
  return (
    <div>
        <Collection list={collectionList}/>
        <div className='max-width'>
        <Filters filterList={deliveryFilters}/>
        </div>
        <ExploreSection list={nightLifeList} collectionName="Nightlife Restaurants in Kalyan,Mumbai"/>
    </div>

  );
};

export default NightLife;