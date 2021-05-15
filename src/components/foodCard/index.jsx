import React from 'react';
import {FoodCardContainer} from "./style";

const FoodCard = ({foodImage, foodTitle, foodContent, foodPrice}) => {
    return (
        <FoodCardContainer>
        <div className="image-container">
            <img src={foodImage} alt="food-image"/>
        </div>
            <p className="food-title">{foodTitle}</p>
            <p className="food-content">{foodContent}</p>
            <p className="food-price">{foodPrice}</p>
        </FoodCardContainer>
    );
};

export default FoodCard;
