import React, {Fragment} from 'react';
import {DayContainer, StyledFooter} from "./styles";
import {Box, SimpleGrid} from "@chakra-ui/react";


const dayData = [
    {
        date: "Monday",
        time: "10:00 - 20:00"
    },
    {
        date: "Tuesday",
        time: "10:00 - 20:00"
    },
    {
        date: "Wednesday",
        time: "10:00 - 20:00"
    },
    {
        date: "Thursday",
        time: "10:00 - 20:00"
    },
    {
        date: "Friday",
        time: "10:00 - 20:00"
    },
    {
        date: "Saturday",
        time: "10:00 - 20:00"
    },
    {
        date: "Sunday",
        time: "10:00 - 20:00"
    }
]

const Day = ({date, time}) => <DayContainer><span>{date}</span>{time}</DayContainer>


const Footer = () => {
    return (
        <StyledFooter>
            <Box w={"100%"} d={"flex"} flexDir={"column"} alignItems={"center"} border={"1px dashed #FFFFFF"} p={".5rem"} mb={"2rem"}>
                <p className="header"><span>~</span>Opening Hours<span>~</span></p>
                <SimpleGrid spacing={1} columns={2} justifyContent={"flex-end"}>
                    {dayData.map((item,index) => (
                        <Fragment key={index}>
                            <Day date={item.date} time={item.time}/>
                        </Fragment>
                    ))}
                </SimpleGrid>
            </Box>
                <Box w={"100%"} border={"1px dashed #FFFFFF"} p={".8rem"} mb={"2rem"}>
                    <SimpleGrid spacing={2} columns={3}>
                        <div className={"contact-items"}>
                            <h6>Address</h6>
                            <p><span>HSE Gourmet</span> cafe & Dining
                                25 Babtope Bejide Crescent,
                                Lekki Phase 1, Lagos</p>
                        </div>
                        <div className={"contact-items"}>
                            <h6>Contact</h6>
                            <p>+234 810 745 3157</p>
                            <p>+234 809 086 5298</p>
                        </div>
                        <div className={"contact-items"}>
                            <h6>Email</h6>
                            <p>info@hsecafe.com</p>
                            <p>info@gourmet.com</p>
                        </div>
                    </SimpleGrid>
                </Box>
            <p className={"copyright"}>© Copyright 2021 HSE Gourmet  cafe & Dining , All Rights Reserved. Designed with passion by Jega_jnr</p>
        </StyledFooter>
    );
};

export default Footer;
