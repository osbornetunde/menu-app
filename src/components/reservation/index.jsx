import React from 'react';
import {ReservationContainer} from "./styles";
import Phone from '../../assets/vector/Phone'
import Map from "../../assets/vector/Map";
import World from "../../assets/vector/World";
import Instagram from "../../assets/vector/Instagram";

const Reservation = () => {
    return (
        <ReservationContainer>
            <div className="container" >
                <div className="overlay"/>
                <div className="content">
                    <p className="header">reservation only service</p>
                <p className="subheader">MAKE A RESERVATION TODAY</p>
                <div className="phone">
                    <span>
                        <Phone/>
                    </span>
                    <div className="phone-wrapper">
                        <p>+234 810 745 3157</p>
                        <p>+234 809 086 5298</p>
                    </div>
                </div>
                <p className="company-name">HSE Gourmet</p>
                <div className="address"><span><Map/></span><p>25 Babtope Bejide Crescent, Lekki Phase 1, Lagos</p></div>
                <div className="site"><span><World/></span><p>www.hsegourmet.com</p></div>
                <div className="insta"><span><Instagram/></span><p>hsegourmet</p></div>
                    </div>
            </div>
        </ReservationContainer>
    )
};

export default Reservation;
