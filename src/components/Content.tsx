import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs'
import dicoding from '../assets/dicoding.webp'
import programming from '../assets/programming.webp'
import InfoText from './InfoText'
import Statistic from './Statistic'

const Content = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem
        colSpan={[6, 6, 3]}
        bg={`url(${dicoding}) no-repeat 90% 55%`}
        bgSize={100}
        my={10}
      >
        <VStack spacing={30} alignItems="flex-start">
          <Box>
            <HStack alignItems="stretch">
              <Heading flexGrow={1}>Hello!</Heading>
              <Spacer />
              <Heading bg="teal" color="white" borderRadius={999} px={8}>
                Fullstack
              </Heading>
            </HStack>
            <Heading>I'm Pradana</Heading>
          </Box>
          <Text fontWeight="medium" maxW={['80%']}>
            Build web, desktop and android for over 1+ years as fullstack gabut
          </Text>
          <ButtonGroup>
            <Button
              colorScheme="yellow"
              color="white"
              size="lg"
              borderRadius={0}
            >
              Hire Me
            </Button>
            <Button variant="ghost" size="lg" rightIcon={<BsArrowUpRight />}>
              Projects
            </Button>
          </ButtonGroup>
          <Wrap spacing={30}>
            <WrapItem>
              <InfoText
                title="+69"
                subtitle="Klien tidak puas karena kami meragukan tamu karena permintaannya aneh-aneh"
              />
            </WrapItem>
            <WrapItem>
              <InfoText
                title="69"
                subtitle="Project yang tidak pernah selesai"
              />
            </WrapItem>
            <WrapItem>
              <InfoText title="Contact" subtitle="wakwaujaim@gmail.com" />
            </WrapItem>
          </Wrap>
        </VStack>
      </GridItem>
      <GridItem colSpan={[6, 6, 3]}>
        <Image src={programming} />
        <InputGroup>
          <Input placeholder="Jangan lupa subsbrek, subscrep, shockbreker :v" />
          <InputRightElement>
            <IconButton
              aria-label="Enter"
              colorScheme="yellow"
              borderRadius={0}
              icon={<BsArrowRight />}
            />
          </InputRightElement>
        </InputGroup>
      </GridItem>
      <GridItem colSpan={6} my={10}>
        <Statistic />
      </GridItem>
    </Grid>
  )
}

export default Content
