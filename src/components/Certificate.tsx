import { Box, Divider, Image, VStack } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Certificate = () => {
  const certificates = [
    'https://i.ibb.co/1bM46T4/sertifikat-course-169-1232461-221120015245-1.png',
    'https://i.ibb.co/tqCnT1h/sertifikat-course-159-1232461-200521105618-1.png',
    'https://i.ibb.co/sgJXdyb/sertifikat-course-256-1232461-301221054640-1.png',
    'https://i.ibb.co/9nQkPPY/sertifikat-course-261-1232461-150222173411-1.png',
    'https://i.ibb.co/LJ0MBT1/bfdc179dc01a455bf3258aeb423713c6course-certificate-fb20ef93qjsf2v.png',
    'https://i.ibb.co/CKP45XR/9cf041779e2adbcdebec28a1517136c2course-certificate-7436abedqjvfru.png',
    'https://i.ibb.co/CbV4yKs/1cbb67d2a2f005a765cad0134d14d122course-certificate-2d41d09cqjw74v.png',
  ]

  return (
    <VStack spacing={10}>
      <Divider />
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerMode={true}
        centerSlidePercentage={50}
        infiniteLoop={true}
        autoPlay={true}
        transitionTime={1000}
      >
        {certificates.map((cert, index) => {
          return (
            <Box key={index}>
              <Image
                boxSize={{
                  md: 'xs',
                }}
                src={cert}
                alt="Sertifikat intinya :v"
              />
            </Box>
          )
        })}
      </Carousel>
      <Divider />
    </VStack>
  )
}

export default Certificate
