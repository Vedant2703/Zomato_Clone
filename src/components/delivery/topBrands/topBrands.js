import './topBrands.css';
import NextArrow from '../../common/carousel/nextArrow';
import PreviousArrow from '../../common/carousel/previousArrow';
import Slider from 'react-slick';

const brandList = [
    {
        id : 1,
        time : "35 min",
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/7e91871a40c877332641a411e7dea18b_1668319552.png?output-format=webp",
    },
    {
        id : 2,
        time : "35 min",
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
    },
    {
        id : 3,
        time : "35 min",
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png?output-format=webp",
    },
    {
        id : 4,
        time : "35 min",
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655800197.png?output-format=webp ",
    },
    {
        id : 5,
        time : "35 min",
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/f6164fbaab03b50bf6119d69c4cbff0b_1629955345.png?output-format=webp",
    },
    {
        id : 6,
        time : "35 min",
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png",
    },
    {
        id : 7,
        time : "35 min",
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png",
    },
    {
        id : 8,
        time : "35 min",
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520651.png",
    },
    {
        id : 9,
        time : "35 min",
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017911.png",
    },
    {
        id : 10,
        time : "35 min",
        cover : "https://b.zmtcdn.com/data/brand_creatives/logos/3c2a7f7e5fc15add88437a4891a7c229_1675833518.png",
    },
    
    

];
const settings = {
    
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PreviousArrow/>,
  };

const TopBrands = () => {

        return <div className='top-brands max-width'>
            <div className='collection-title'> Top Brands For You</div>
            <Slider {...settings}>
                {brandList.map((brand)=> {
                    return <div>
                        <div className='top-brands-cover'>
                            <img className='top-brands-image' src={brand.cover} alt={brand.time}/>
                            <h6 className='brand-delivery-time absolute-center'> {brand.time}</h6>
                        </div>
                    </div>
                })}
            </Slider>
        </div>    
};

export default TopBrands; 