import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Text
  } from '@chakra-ui/react'
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineDown } from 'react-icons/ai';

function DrawerNav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} onClick={onOpen} bg={'transparent'} color={"blue"} fontSize={'2xl'}>
          <GiHamburgerMenu />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent height="60% !important">
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
  
            <DrawerBody>
                <Text marginBottom={10} cursor={'pointer'}>Find Reservations</Text>
                <Text marginBottom={10} cursor={'pointer'} display={'flex'} alignItems={'center'} gap={1}>Packages<AiOutlineDown /></Text>
                <Text marginBottom={10} cursor={'pointer'} display={'flex'} alignItems={'center'} gap={1}>About Lakshadweep <AiOutlineDown /></Text>
                <Text marginBottom={10} cursor={'pointer'}>About Us</Text>
                <Text marginBottom={10} cursor={'pointer'}>Gol</Text>
                <Text>Support</Text>
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerNav;