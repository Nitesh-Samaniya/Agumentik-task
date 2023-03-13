import React from 'react'
import { Box, Button, Hide, Image, Show, Text } from '@chakra-ui/react'
import { AiOutlineDown } from 'react-icons/ai';
import DrawerNav from './DrawerNav';

const Navbar = () => {
  return (
    <Box bg={'#E5F8FE'}> {/* main container */}
        <Box pl={['48px']} pr={['48px']} pt={'40px'} pb={'40px'} display={'flex'} justifyContent={'space-between'}>  {/* box containing content */}
          <Box display={'flex'} gap={'80px'}>

            <Box> {/* box for logo */}
                <Image w={'99.35px'} h={'56px'} src='https://s3-alpha-sig.figma.com/img/80a0/725d/c6fde8d86e0166b58d5ef942d8d55b63?Expires=1679875200&Signature=mDE0gmutHrZk1ucqmOFMoFUhnVTHA2T9n4qkNdAOV8d8PFWtfg4Ytc~aymbtdjc7dC3vC~kEoi~IiB~e7jxKKWC342ezJ5wyi3unZa3PAxc7HnLnvzu3XFBEC8404r6mx3WdOocZUp0G1GH3kM31OPrqtQ2nUJ-krc-NDHM01l3bXMMkCm2EEtn5DNiZSA6FImaeAeneCpyf1CSGkaCjBZ~R1VRlzrUcgm5m-MiIgvSZ9HPpu-lY3mfjFJ~sSlL0M8GGYGNsi0AyMq-Glp24jwXDbFk7kXKOgSxFxEnwM9Eo-cfgQwi4tcFBOjUAly8d9-e9jtMMpSRSulJRoxAxHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
            </Box>

            <Hide below='900px'>  {/* hide the box which containing menu when screen shrink to below 900px */}
              <Box display={'flex'} gap={10} alignItems={'center'} fontFamily={'sans-serif'} lineHeight={'22px'} color={'#3A3A3A'}>
                  <Text cursor={'pointer'}>Find Reservations</Text>
                  <Text cursor={'pointer'} display={'flex'} alignItems={'center'} gap={1}>Packages<AiOutlineDown /></Text>
                  <Text cursor={'pointer'} display={'flex'} alignItems={'center'} gap={1}>About Lakshadweep <AiOutlineDown /></Text>
                  <Text cursor={'pointer'}>About Us</Text>
                  <Text cursor={'pointer'}>Gol</Text>
                  <Text cursor={'pointer'}>Support</Text>
              </Box>
            </Hide>

          </Box>

          <Hide below='900px'> {/* Hide the login/signup button below 900px */}
            <Box display={'flex'} justifyContent={'space-between'}>
              <Button colorScheme='teal' variant='ghost' mr={10}>Login</Button>
              <Button colorScheme='teal' variant='solid' borderRadius={'20px'}>Sign Up</Button>
            </Box>
          </Hide>

          <Show below='900px'> {/* show the drawer below 900px */}
            <DrawerNav />
          </Show>
        </Box>
    </Box>
  )
}

export default Navbar