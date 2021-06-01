import React from 'react';
import {Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Text,} from "@chakra-ui/react"
import Image from '../../assets/img/modaiImage.png';


const FoodModal = ({isOpen, onClose}) => {


    return (
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent width={"36.5rem"}   borderRadius={"1rem"} bg={"var(--primary-white)"} overflow={"hidden"}>
                    <ModalBody p={".5rem .5rem 0"}>
                        <Box as={"span"} position={"relative"} display={"block"}>
                            <img src={Image} alt={"img"}/>
                        </Box>
                        <Box m={"1rem 0 2rem"}>
                            <Text
                                fontSize={ "1.6rem"}
                                fontWeight={400}
                                lineHeight={"2.6rem"}
                                fontFamily={"var(--regular-font)"}
                            >
                                Succulent pork belly, marinated in a ginger BBQ sauce, grilled and topped with toasted sesame seed.
                            </Text>
                        </Box>
                    </ModalBody>
                    <ModalFooter p={0}>
                        <Button
                            onClick={onClose}
                            h={"5rem"}
                            w={"100%"}
                            borderRadius={"0px 0px 5px 5p"}
                            bg={"#AF1601"}
                            color={"#fff"}
                            fontSize={ "2rem"}
                            fontWeight={500}
                            lineHeight={"2.4rem"}
                            fontFamily={"var(--regular-font)"}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    )
}

export default FoodModal
