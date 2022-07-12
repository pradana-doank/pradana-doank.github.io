import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react'

const Appbar = () => {
  const menus = ['Home', 'Works', 'About', 'Projects']
  return (
    <Box pt={5}>
      <HStack>
        <Heading display="inline">Pradana</Heading>
        <Heading display="inline" color="pink.200">
          .
        </Heading>
        <Spacer />
        {menus.map((menu, index) => (
          <Button
            variant="ghost"
            key={index}
            _active={{
              backgroundColor: 'transparent',
            }}
            _hover={{
              backgroundColor: 'transparent',
              textDecoration: 'underline',
            }}
          >
            {menu}
          </Button>
        ))}
        <Spacer />
        <Button
          variant="ghost"
          _hover={{ textDecoration: 'underline' }}
          border="1px solid black"
          borderRadius={0}
          px={10}
        >
          Let's chat
        </Button>
      </HStack>
      <Divider my={5} />
    </Box>
  )
}

export default Appbar
