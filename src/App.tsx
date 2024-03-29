import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Appbar from './components/Appbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Work from './pages/Work'

import './index.css'
import About from './pages/About'

const App = () => {
  return (
    <Container maxW="container.lg">
      <Appbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
