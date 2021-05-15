import React from 'react';
import {SeasonalContainer} from "./styles";
import Chicken from '../../assets/img/chicken.png';
import Lamb from '../../assets/img/lamb.png';
import Pork from '../../assets/img/pork.png';
import FoodCard from "../foodCard";

const foodData = [
    {
        foodImage: Chicken,
        foodTitle: 'CHICKEN CROQUETTE',
        foodContent: 'Pulled chicken stuffed potato cakes...',
        foodPrice: 'NGN 4,100'
    },
    {
        foodImage: Lamb,
        foodTitle: 'PORK POT STICKERS',
        foodContent: 'dumplings filled with savoury pork mince...',
        foodPrice: 'NGN 3,800'
    },
    {
        foodImage: Pork,
        foodTitle: 'LAMB POPS',
        foodContent: 'dumplings filled with savoury pork mince...',
        foodPrice: 'NGN 6,500'
    }
]

const Seasonal = ({onOpen}) => {
    return (
        <SeasonalContainer>
        <p className="header"><span>~</span>Seasonal Special<span>~</span></p>
            <p className="sub-header">Fresh products paired with excellent...</p>
            <div className="menu-section">
                {
                    foodData.map((foodItem ,index)=> <span key={index} onClick={onOpen}><FoodCard foodImage={foodItem.foodImage} foodContent={foodItem.foodContent} foodTitle={foodItem.foodTitle} foodPrice={foodItem.foodPrice}/></span>)
                }
            </div>

        </SeasonalContainer>
    );
};

export default Seasonal;
