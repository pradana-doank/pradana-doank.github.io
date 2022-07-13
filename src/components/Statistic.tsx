import {
  Box,
  Button,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
  Wrap,
} from '@chakra-ui/react'

const Statistic = () => {
  return (
    <SimpleGrid columns={2}>
      <Box>
        <Text fontWeight="bold" fontSize="xl">
          Project
        </Text>
        <Text fontWeight="bold" fontSize="xl">
          Statistic 2022
        </Text>
        <Button colorScheme="yellow" color="white" borderRadius={0} my={5}>
          Know More
        </Button>
      </Box>
      <Box fontWeight="medium">
        <Wrap>
          <HStack borderBottom="1px solid black" py={2}>
            <Text
              minW={{
                md: 'xs',
              }}
            >
              Website Application
            </Text>
            <Spacer />
            <Text> 69 </Text>
          </HStack>
          <HStack borderBottom="1px solid black" py={2}>
            <Text
              minW={{
                md: 'xs',
              }}
            >
              Android Application
            </Text>
            <Spacer />
            <Text> 69 </Text>
          </HStack>
          <HStack borderBottom="1px solid black" py={2}>
            <Text
              minW={{
                md: 'xs',
              }}
            >
              Desktop Application
            </Text>
            <Spacer />
            <Text> 69 </Text>
          </HStack>
        </Wrap>
      </Box>
    </SimpleGrid>
  )
}

export default Statistic
