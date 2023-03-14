import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import IslandCard from './IslandCard'

const Island = () => {
  return (
    <Box mt={'100px'}>
        <Text 
            textAlign={'center'}
            fontSize={'32px'}
            fontWeight={'bold'}
            color={'#3A3A3A'}
        >Island Stays</Text>

        <Text
            textAlign={'center'}
            m="auto"
            fontSize={'16px'}
            color={'#5A5A5A'}
            w={['310px','528px','700px','1106px']}
        >
            One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious
            modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.
        </Text>

        <IslandCard />
    </Box>
  )
}

export default Island