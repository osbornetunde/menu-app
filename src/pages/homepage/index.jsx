import React from 'react';
import {HomePageContainer} from "./styles";
import Hero from "../../components/hero";
import Specialize from "../../components/specialize";
import Seasonal from "../../components/seasonal";
import BestMenu from "../../components/BestMenu";
import Reservation from "../../components/reservation";
import Footer from "../../components/Footer";
import {useDisclosure} from "@chakra-ui/react";
import FoodModal from "../../components/modal";

const HomePage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <HomePageContainer>
            <Hero/>
            <Specialize/>
            <Seasonal />
            <BestMenu onOpen={onOpen}/>
            <Reservation/>
            <Footer/>
        </HomePageContainer>
        <FoodModal isOpen={isOpen} onClose={onClose}/>
        </>
    );
};

export default HomePage;
