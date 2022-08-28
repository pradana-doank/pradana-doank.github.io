import { Box, Button, HStack, SimpleGrid, Spacer, Text } from '@chakra-ui/react'

const Statistic = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} color="">
      <Box textAlign={['center', 'center', 'left']}>
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
        <HStack borderBottom="1px solid black" py={2}>
          <Text minW={{}}>Website Application</Text>
          <Spacer />
          <Text> 69 </Text>
        </HStack>
        <HStack borderBottom="1px solid black" py={2}>
          <Text minW={{}}>Android Application</Text>
          <Spacer />
          <Text> 69 </Text>
        </HStack>
        <HStack borderBottom="1px solid black" py={2}>
          <Text minW={{}}>Desktop Application</Text>
          <Spacer />
          <Text> 69 </Text>
        </HStack>
      </Box>
    </SimpleGrid>
  )
}

export default Statistic
