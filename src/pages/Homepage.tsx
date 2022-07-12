import { Container } from '@chakra-ui/react'
import Appbar from '../components/Appbar'
import Content from '../components/Content'

const Homepage = () => {
  return (
    <Container maxW="container.lg">
      <Appbar />
      <Content />
    </Container>
  )
}

export default Homepage
