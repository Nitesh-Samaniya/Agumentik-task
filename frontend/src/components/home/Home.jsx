import React from 'react'
import { Box } from '@chakra-ui/react'
import Front from './Front'
import Flying from './Flying'
import Packages from './Packages'
import Island from './Island'

const Home = () => {
  return (
    <Box>
        <Front />
        <Flying />
        <Packages />
        <Island />
    </Box>
  )
}

export default Home