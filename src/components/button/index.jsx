import React from 'react';
import {Button} from "@chakra-ui/react";


const StarButton = ({text, variant, icon, color}) => {
    return (
        <Button variant={variant} leftIcon={icon} mt="2rem" color={color} fontWeight={400} fontFamily={"var(--primary-font)"} w={"14.9rem"} h={"3rem"} borderRadius={"none"} _hover={{bg:'#000', color:'#fff'}}>{text}</Button>
    );
}

export default StarButton;
