import React from 'react'
import { Box, Button, Hide, Image, Show, Text } from '@chakra-ui/react'

const Front = () => {
  return (
    <Box pl={['48px']} pr={['70px']} bg={'##E5F8FE'} display={'flex'} gap={'30px'}>
        <Box textAlign={['center', 'start']}>
            <Hide below='500px'>
                <Button mt={2} fontSize={'36px'} bg={'#E5F8FE'} color={'##D2F4FF'} w={'197px'} h={'67px'} borderRadius={'44px'}>Visit</Button>
            </Hide>
            <Box h={'243px'} mt={'48px'} lineHeight={['44px','44px','44px','89.6px']} fontWeight={700} fontSize={['32px','32px','32px','64px']}>
                The Exotic <Text color={'#3282AD'}>Lakshadweep</Text> Islands
            </Box>
            <Button mt={['-100px','-100px','-100px','80px']} color={'#3282AD'} bg={'transparent'} border="2px solid #3282AD" w={'174px'} h={'64px'} borderRadius={'5px'} p={'16px, 32px, 16px, 32px'} gap={'10px'}>Discover Now</Button>
        </Box>

        <Hide below='900px'>
            <Box position={'relative'}>
                <Image w={'421px'} position={'absolute'} right={10} borderRadius={'40%'} src='https://s3-alpha-sig.figma.com/img/ecc4/49ea/6b53db2801f7197a6cf3c0f494d01327?Expires=1679875200&Signature=f0E4uCl~AvVv40npmzAY1TqWsTfM8HM4H5tqzdAw5iqqzdPDdbmb1NWEdhNaaqOTfye--nEqXhnGm4gh-2JRzIITmboK5X4l-ujG0K4RKFRRlyADCur1rOzh6iTG6SRKHGZ6TmaGMyg7KjZeai3-KQZ2-W5HwBdU0XYIjIi2ob6tIQ9jPWmYpEeBMRM1YLjgj2jjoGVYecwydrCf8eObvPOrYf73~-WaWQfcUOC2zuq5HSkEFHFBES76wxuJTkmuysys2bUMaXMq0tqn-oCRJ2Vb9XOAbWTQDCKbxaEi6MAvV72D19z98FBhsSaCqM9S9Aq29p3G9CVCtwosyKjcrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='girl'/>
                <Image w={'871px'} mt={'-150px'} src='https://s3-alpha-sig.figma.com/img/4e4e/4703/132ed55bc459e6a9f7ab5c5436481101?Expires=1679875200&Signature=bSCSdeCVHd9Dm90hDr8s3GI~ea4exODtH5TzLthUouXFDg7tnmQ6IhQhOa78G5uV~qi09FoSiYc6quXbBNSZgmUSdTlI0p-VqY2rtfcq~kzY4O475iqqONO398lU5jBFkIQRS8XDs9Sd6YGARHkc4WkE-7VDzCeiXJlh2xfLtPSMqx9T7A3Np5CFVYBNA20IPQ~6cc7OYTZ~OCqM-qINVSmp0~4Btan3psO4y-MgZlUUEdJaQxWjs3V5JpqzAampBwCAfjxjKpwqPy9c6s2dSmGF7DnOp61vAQT8qCEAL-71v6ap4FMwKRll-mci3pM6CAYB0Y7wi0FPA6nJjjxQqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='globe'/>
                <Box position={'absolute'} top={'300px'} left={'200px'} p={2} bg={'white'}>
                    <Image w={'155px'}  h={'81px'} src='https://s3-alpha-sig.figma.com/img/6df1/3489/b22a168b1020522dd75c4efc49c605bd?Expires=1679875200&Signature=lq1KyHe4h9VCBXe25bOlDPRHKpFFtKcxuI0IHDSc7UTJKvAvg5MJqzLc42XCf9JtRndg4ZIsCm0lfjpvSr6YKvsUBeuotzDBHsD1kUJqHVKCo8YhFYlseRybjkyJBt3L9daKmWOfcqTd6bWB1LQPYUPUyYeKoLicyeB7u6aqbhrHC8-gkEWJq06NvLVmU1UpOAwDpNTVGagHf-NAbpxmFiA~W2hqROplIzijoCyu8TdJeTMhUt1ygOaytoPLhzkaivQSk1KtELhYpVu2CKBaYp90AD67C3OYC4bkrtpu~wEpsAZxgdnc0-hXCNk~Z-zKvUSY-TJzyU8F2u5CQfQvwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='img3'/>
                    <Text fontWeight={'extrabold'}>Explore Labuan Bajo</Text>
                    <Text color={'gray'}>NTT, Indonesua</Text>
                </Box>
            </Box>
        </Hide>
        <Hide below='500px'>
            <Show below='900px'>
                <Image w={'421px'} position={'absolute'} right={10} borderRadius={'40%'} src='https://s3-alpha-sig.figma.com/img/ecc4/49ea/6b53db2801f7197a6cf3c0f494d01327?Expires=1679875200&Signature=f0E4uCl~AvVv40npmzAY1TqWsTfM8HM4H5tqzdAw5iqqzdPDdbmb1NWEdhNaaqOTfye--nEqXhnGm4gh-2JRzIITmboK5X4l-ujG0K4RKFRRlyADCur1rOzh6iTG6SRKHGZ6TmaGMyg7KjZeai3-KQZ2-W5HwBdU0XYIjIi2ob6tIQ9jPWmYpEeBMRM1YLjgj2jjoGVYecwydrCf8eObvPOrYf73~-WaWQfcUOC2zuq5HSkEFHFBES76wxuJTkmuysys2bUMaXMq0tqn-oCRJ2Vb9XOAbWTQDCKbxaEi6MAvV72D19z98FBhsSaCqM9S9Aq29p3G9CVCtwosyKjcrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='girl'/>
            </Show>
        </Hide>
    </Box>
  )
}

export default Front