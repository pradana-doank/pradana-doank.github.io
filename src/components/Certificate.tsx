import { Box, Divider, Image, VStack } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Certificate = () => {
  const certificates = [
    'react',
    'html-css',
    'node-js',
    'flutter',
    'backend',
    'js',
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
                src={`${
                  import.meta.env.VITE_IMAGEKITIO_URL
                }/portfolio/certificate/${cert}.png`}
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
