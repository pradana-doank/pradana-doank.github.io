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
import { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import TagBuilder from '../components/TagBuilder'
import { FrameworkName } from '../data/framework'
import { ProgrammingName } from '../data/programming'
import { TagType } from '../data/tag'

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <InputGroup my={5}>
        <InputLeftElement>
          <Icon as={FaSearch} />
        </InputLeftElement>
        <Input placeholder="Search my project here" />
      </InputGroup>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {Array.from({ length: 30 }).map((_data, index) => {
          return (
            <VStack key={index} alignItems="flex-start">
              <Image src="https://picsum.photos/300" w="full" />
              <Text fontSize="xl" fontWeight="medium">
                Hello World
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
