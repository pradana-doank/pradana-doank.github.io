import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Heading,
  HStack,
  IconButton,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react'
import { BsMenuButtonWideFill } from 'react-icons/bs'

const Appbar = () => {
  const menus = ['Home', 'Works', 'About', 'Projects']
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box pt={5}>
      <HStack>
        <Heading display="inline">Pradana</Heading>
        <Heading display="inline" color="pink.200">
          .
        </Heading>
        <Spacer />
        <Box display={['none', 'none', 'block']}>
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
        </Box>
        <Spacer />
        <Button
          display={['none', 'none', 'block']}
          variant="ghost"
          _hover={{ textDecoration: 'underline' }}
          border="1px solid black"
          borderRadius={0}
          px={10}
        >
          Let's chat
        </Button>
        <Box display={['block', 'block', 'none']}>
          <IconButton
            aria-label="Menu"
            colorScheme="yellow"
            color="white"
            icon={<BsMenuButtonWideFill />}
            onClick={onOpen}
          />
        </Box>
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
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
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
      <Divider my={5} />
    </Box>
  )
}

export default Appbar
