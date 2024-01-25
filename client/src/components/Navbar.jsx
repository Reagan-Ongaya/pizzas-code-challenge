import { Link } from "react-router-dom";
import { Box, Flex, HStack} from "@chakra-ui/react";
import {RepeatClockIcon,  AtSignIcon, SunIcon, HamburgerIcon} from "@chakra-ui/icons"


export const Navbar= () => {
    return (
       <Box px={4} bg={'lightblue'}> 
        <Flex justify={'space-between'} h={16}>
            <HStack spacing={5}> 
            <RepeatClockIcon  w={10} h={10} color={'black'} spacing={8} /> 
                <HStack spacing={6}  fontSize={20} fontFamily={'monospace'} >
                    <Link to={'/'} bg={'blue'} >Home</Link>

                    <Link to={'/About'}>About</Link>
                </HStack>
            </HStack>

            
            <HStack spacing={8}>
            <Flex py={3} px={2} color={"black"}>
            <AtSignIcon  w={8} h={8}/>
            </Flex>
            <Flex py={3} color={"black"}>
            <SunIcon  w={8} h={8}/>
            </Flex>
            <Flex py={3} color={"black"}>
            <HamburgerIcon  w={8} h={8}/>
            </Flex>
            </HStack>
        </Flex>
        <div><strong>TraveLEE</strong></div>
       </Box>
    )
};