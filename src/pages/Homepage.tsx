import { Container } from '@chakra-ui/react'
import { useEffect } from 'react'
import Appbar from '../components/Appbar'
import Content from '../components/Content'
import Footer from '../components/Footer'

const Homepage = () => {
  useEffect(() => {
    document.title = 'Homepage'
  }, [])

  return (
    <>
      <Content />
    </>
  )
}

export default Homepage
