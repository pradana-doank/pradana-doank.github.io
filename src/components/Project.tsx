import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Project = () => {
  const projectImages = ['nefa', 'food-recipe', 'windows']

  return (
    <VStack spacing={10}>
      <Heading textAlign="center">My Project</Heading>
      <Text fontWeight="medium" fontSize="md">
        List of my complete project in spare time
      </Text>
      <Carousel
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        {projectImages.map((project, index) => {
          return (
            <Box
              key={index}
              pos="relative"
              onClick={() => console.log('Clicked')}
              _hover={{
                opacity: 0.6,
              }}
            >
              <Image
                boxSize={{
                  base: 'xs',
                  md: 'md',
                }}
                transition="0.5s ease"
                src={`${
                  import.meta.env.VITE_IMAGEKITIO_URL
                }/portfolio/${project}.png`}
                alt={`${project}.png`}
                objectFit="cover"
                objectPosition="0% 0%"
              ></Image>
              <Box
                transition="0.5s ease"
                top={0}
                left={0}
                right={0}
                bottom={0}
                pos="absolute"
                textAlign="center"
                opacity={0}
                _hover={{ opacity: 1, bgColor: 'yellow', cursor: 'default' }}
              >
                <Text
                  pos="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontWeight="medium"
                  fontSize="xl"
                  textTransform="capitalize"
                  color="white"
                >
                  {project.split('-').join(' ')}
                </Text>
              </Box>
            </Box>
          )
        })}
      </Carousel>
      <Button w="100%" colorScheme="yellow" textColor="white">
        Lihat Selengkapnya
      </Button>
    </VStack>
  )
}

export default Project
