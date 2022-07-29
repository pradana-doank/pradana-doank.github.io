import { useEffect } from 'react'
import Content from '../components/Content'

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
