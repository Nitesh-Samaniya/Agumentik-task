import React from 'react'
import { Box } from '@chakra-ui/react'
import Front from './Front'
import Flying from './Flying'
import Packages from './Packages'
import Island from './Island'
import Client from './Client'

const Home = () => {
  return (
    <Box>
        <Front />
        <Flying />
        <Packages />
        <Island />
        <Client />
    </Box>
  )
}

export default Home