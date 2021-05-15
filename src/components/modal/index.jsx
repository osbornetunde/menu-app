import React from 'react';
import {Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Text,} from "@chakra-ui/react"
import Image from '../../assets/img/modaiImage.png';
import SmallStar from "../../assets/vector/SmallStar";


const FoodModal = ({isOpen, onClose}) => {


    return (
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent width={"36.5rem"}   borderRadius={"1rem"} bg={"var(--primary-white)"} overflow={"hidden"}>
                    <ModalBody p={".5rem .5rem 0"}>
                        <Box as={"span"} position={"relative"} display={"block"}>
                            <img src={Image} alt={"img"}/>
                            <Box
                                width={"100%"}
                                position={"absolute"}
                                left={"0"}
                                bottom={"1rem"}
                                pl={".8rem"}
                            >
                                <Text
                                    fontSize={ "2rem"}
                                    fontWeight={700}
                                    lineHeight={"3rem"}
                                    color={"var(--primary-white)"}
                                    fontFamily={"var(--regular-font)"}
                                    pb={".8rem"}
                                >
                                    CHICKEN CROQUETTE
                                </Text>
                                <Box as={"span"}>
                                    <Box as={"span"}  d={"flex"} mb={"1rem"}>
                                        <Text
                                            fontSize={"1.3rem"}
                                            fontWeight={500}
                                            lineHeight={"1.5rem"}
                                            color={"#AF1601"}
                                            mr={"1.1rem"}
                                            bg={"var(--primary-white)"}
                                            borderRadius={".5rem"}
                                            p={".5rem 1rem"}
                                        >
                                            529 Reviews
                                        </Text>
                                        <Text
                                            fontSize={"1.3rem"}
                                            fontWeight={500}
                                            lineHeight={"1.5rem"}
                                            color={"#000"}
                                            bg={"var(--primary-white)"}
                                            borderRadius={".5rem"}
                                            p={".5rem 1rem"}
                                        >
                                            N 6,500
                                        </Text>
                                    </Box>
                                    <Box w={"100%"} d={"flex"} justifyContent={"space-between"} alignItems={"flex-end"}>
                                        <Box as={"span"}>
                                        <Text
                                            fontSize={"1.3rem"}
                                            fontWeight={500}
                                            lineHeight={"1.5rem"}
                                            color={"#AF1601"}
                                            mr={"1.1rem"}
                                            bg={"var(--primary-white)"}
                                            borderRadius={".5rem"}
                                            p={".5rem 1rem"}
                                        >
                                            Ready 60 - 80 mins
                                        </Text>
                                        </Box>
                                        <Box
                                            as={"span"}
                                            w={"1.5rem"}
                                            h={".8rem"}
                                            bg={"#D2A400"}
                                            p={".5rem"}
                                            borderRadius={".2rem"}
                                            d={"flex"}
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            mr={"1rem"}
                                        >
                                            <Text
                                                fontSize={".8rem"}
                                                fontWeight={500}
                                                lineHeight={".9rem"}
                                            >3
                                            </Text>
                                            <Box as={"span"} w={".8rem"} h={".8rem"}>
                                                <SmallStar/>
                                            </Box>
                                        </Box>

                                    </Box>
                                </Box>
                            </Box>
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
