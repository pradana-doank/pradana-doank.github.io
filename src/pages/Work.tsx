import {
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import TagBuilder from '../components/TagBuilder'
import { FrameworkName } from '../data/framework'
import { ProgrammingName } from '../data/programming'
import { TagType } from '../data/tag'

const Work = () => {
  const [input, setInput] = useState('')

  const works = Array.from({ length: 30 }).map((_data, index) => ({
    name: `Project number ${index}`,
    image: 'https://picsum.photos/300',
  }))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <InputGroup my={5}>
        <InputLeftElement>
          <Icon as={FaSearch} />
        </InputLeftElement>
        <Input
          placeholder="Search my project here"
          onChange={(input) => setInput(input.target.value)}
        />
      </InputGroup>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {works
          .filter((work) => work.name.includes(input))
          .map((work, index) => {
            return (
              <VStack key={index} alignItems="flex-start">
                <Image src={work.image} w="full" />
                <Text fontSize="xl" fontWeight="medium">
                  {work.name}
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                  sint cillum sint consectetur cupidatat.
                </Text>
                <TagBuilder
                  type={TagType.WEBSITE}
                  framework={FrameworkName.REACT}
                  programming={ProgrammingName.TYPESCRIPT}
                />
              </VStack>
            )
          })}
      </SimpleGrid>
    </>
  )
}

export default Work
