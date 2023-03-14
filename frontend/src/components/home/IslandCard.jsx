import React from 'react'
import { Card, CardBody, Text, Image, Stack, Heading, Button, Box } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai';


const IslandCard = ({url}) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={"https://s3-alpha-sig.figma.com/img/0232/11f0/fcea7ebbd7b7402c18bff081f52199aa?Expires=1679875200&Signature=QkIiu2XXE-th7zZSAr6WVu~o15De7lfGAX8p3XBsXws0V8g-CbFU0CxUJazi9ZPBTyvOPNqHjgnhZXLHtkC-e1zX7IHHWpnjxuBOMOtuiQ1r2tKzoXXvnh70us9kANko6HNhfD5XJMj7qZh0zHN~O6c9Hl4sGW9-fDZj6DbtwH5ENjnAIfTISmE2BZuBbx4VII4~lV0tyo1En7WiJDv3DoF9FvFN1nVP0luV5RoeH772AaVEy1mXiNXmGRtfbh~~C6Udrss1S~M5Dj9ao80zWytlkxsoU055MnVzhyKO1fSKd~44PlPHBK5JxwBZr3IveGrBPiqpIEOKtU8rRfLNOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
      alt='image'
      borderRadius='lg'
      w={'390px'}
      h={'352px'}
      position={'relative'}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' display={'flex'} justifyContent={'space-between'}>
        Kavaratti
      </Heading>
      <Text color={'gray'} fontSize={'14px'}>
        Kavaratti is the capital of the Union Territory
        of Lakshadweep having ...
      </Text>

        <Box display={'flex'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={1}>
                <AiFillStar />
                <Text fontWeight={'bold'}>4.5</Text>
                <Text color={'gray'}>(1.5k Review)</Text>
            </Box>
            <Box>
                <Button color={'white'} bg={'#3282AD'} fontSize={['12px', "14px"]}>Explore More</Button>
            </Box>
        </Box>
      
    </Stack>
  </CardBody>
</Card>
  )
}

export default IslandCard