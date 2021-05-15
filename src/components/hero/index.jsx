import React from 'react';
import {HeroContainer} from "./styles";
import Logo from "../../assets/vector/Logo";
import StarButton from "../button";
import BlackStar from "../../assets/vector/BlackStar";
import WhiteStar from "../../assets/vector/WhiteStar";

const Hero = () => {
    return (
        <HeroContainer>
            <Logo/>
            <p  className="header">Cusine & drink Beyond the boundaries of taste</p>
            <StarButton text={"Seasonal special"} icon={<BlackStar/>} variant={"solid"}/>
            <StarButton text={"Make a reservation"} icon={<WhiteStar/>} variant={"outline"} color={"#fff"}/>
        </HeroContainer>
    );
}

export default Hero;
