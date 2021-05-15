import React, {Fragment} from 'react';
import {MenuContainer} from "./styles";
import SmallStar from "../../assets/vector/SmallStar";

const Menu = ({menu}) => {
    return (
        <MenuContainer>
            {menu.map((item, index) => (
                <div className="sections" key={index}>
                <p className="menu-title">{item?.header}</p>
                    {item?.content.map(({food, price, content, rating}, index) => (
                <div className="menu-container" key={index}>
                <div className="first-line">
                    <p className="food">{food}</p>
                    <p className="price">{price}</p>
                </div>
                <div className="second-line">
                    <p className="content">{content}</p>
                    <div className="rating"><p>{rating}</p><SmallStar/></div>
                </div>
            </div>))}
                </div>
            ))}
        </MenuContainer>
    );
};

export default Menu;
