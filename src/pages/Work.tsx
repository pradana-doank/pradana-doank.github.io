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
import { FaSearch } from 'react-icons/fa'
import TagBuilder from '../components/TagBuilder'
import { TagType } from '../data/tag'
import { FrameworkType } from '../data/tech'

const Work = () => {
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
                framework={FrameworkType.REACT}
              />
            </VStack>
          )
        })}
      </SimpleGrid>
    </>
  )
}

export default Work
