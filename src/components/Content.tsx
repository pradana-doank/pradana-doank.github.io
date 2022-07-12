import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { BsArrowUpRight } from 'react-icons/bs'
import logo from '../assets/logo.png'
import InfoText from './InfoText'

const Content = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem colSpan={3} bg={`url(${logo}) no-repeat 80% 70%`} bgSize={100}>
        <Container>
          <VStack spacing={30} alignItems="flex-start">
            <Box>
              <HStack>
                <Heading>Hello! I Am </Heading>
                <Spacer />
                <Heading bg="teal" color="white" borderRadius={999} px={8}>
                  Fullstack
                </Heading>
              </HStack>
              <Heading>Danar Putra</Heading>
            </Box>
            <Text fontWeight="medium">
              Build web, desktop and android for over 1+ years as fullstack
              gabut
            </Text>
            <ButtonGroup>
              <Button colorScheme="orange" size="lg" borderRadius={0}>
                Hire Me
              </Button>
              <Button variant="ghost" size="lg" rightIcon={<BsArrowUpRight />}>
                Projects
              </Button>
            </ButtonGroup>
            <Wrap>
              <InfoText
                title="+69"
                subtitle="Klien tidak puas karena kami meragukan tamu karena permintaannya aneh-aneh"
              />
              <Box w="100%" />
              <InfoText
                title="69"
                subtitle="Project yang tidak pernah selesai"
              />
              <InfoText title="Contact" subtitle="wakwaujaim@gmail.com" />
            </Wrap>
          </VStack>
        </Container>
      </GridItem>
      <GridItem colSpan={3} bg="turquoise">
        <Text>Ini adalah Grid 2</Text>
      </GridItem>
      <GridItem colSpan={6} bg="aqua">
        <Text> Ini adalah Grid 3</Text>
      </GridItem>
    </Grid>
  )
}

export default Content
