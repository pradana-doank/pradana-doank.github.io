import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Appbar from './components/Appbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Work from './pages/Work'

import './index.css'

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
