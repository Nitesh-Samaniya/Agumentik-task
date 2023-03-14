import React from 'react'
import { Box, Button, FormLabel, Hide, Input, Show, Text } from '@chakra-ui/react'
import { FaTelegramPlane } from 'react-icons/fa';

const Flying = () => {
  return (
    <Box pl={['10px','70px','70px','70px']} w={['410','629px','629px','1150px']} h={'224px'} p={["48px, 24px, 48px, 24px"]}>
        <Hide below='500px'>
            <Text fontSize={'20px'} fontWeight={600} mb={'24px'}>Where are you flying? </Text>
        </Hide>
        <Hide below='500px'>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Box>
                    <FormLabel>From-To</FormLabel>
                    <Input w={['145px','145px','145px','266.67px']} h={'56px'} placeholder="Lahore-Karachi"/>
                </Box>
                <Box>
                    <FormLabel>Trip</FormLabel>
                    <Input w={['107px','107px','107px','266.67px']} h={'56px'} placeholder="Return"/>
                </Box>
                <Box>
                    <FormLabel>Depart-Return</FormLabel>
                    <Input w={['266.67px']} h={'56px'} type="datetime-local"/>
                </Box>
                <Box>
                    <FormLabel>Passenger-Class</FormLabel>
                    <Input w={['145px','145px','145px','266.67px']} h={'56px'} placeholder="1 Passenger, Economy"/>
                </Box>
            </Box>
            <Box display={"flex"} gap={'24px'} flexDir={'row-reverse'} alignItems={'center'} mt={'32px'}>
                <Button bg={'#3282AD'} color={'white'}><FaTelegramPlane />-Show Flights</Button>
                <Text color={'gray'}>+ Add Promo Code</Text>
            </Box>
        </Hide>
        <Show below='500px'>
        <Box textAlign={'center'}>
            <FormLabel>From-To</FormLabel>
            <Input w={['300px']} h={'56px'} placeholder="Lahore-Karachi"/>
            <Box display={'flex'} mt={5} mb={5}>
                <Box>
                    <FormLabel>Trip</FormLabel>
                    <Input h={'56px'} placeholder="Return"/>
                </Box>
                <Box>
                    <FormLabel>Depart-Return</FormLabel>
                    <Input h={'56px'} type="datetime-local"/>
                </Box>
            </Box>
            <Text mb={3} color={'gray'}>+ Add Promo Code</Text>
            <Button bg={'#3282AD'} color={'white'}><FaTelegramPlane />-Show Flights</Button>
        </Box>
        </Show>
    </Box>
  )
}

export default Flying