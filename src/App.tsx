import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Work from './pages/Work'
import Appbar from './components/Appbar'
import { Container } from '@chakra-ui/react'
import Footer from './components/Footer'

const App = () => {
  return (
    <Container maxW="container.lg">
      <Appbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
