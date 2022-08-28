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
import { useNavigate } from 'react-router-dom'

const Appbar = () => {
  const navigate = useNavigate()

  const menus: {
    name: string
    path: string
  }[] = [
    { name: 'Home', path: '/' },
    { name: 'Works', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/project' },
  ]
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box pt={5}>
      <HStack>
        <Heading display="inline" onClick={() => navigate('/')}>
          Pradana
        </Heading>
        <Heading display="inline" color="pink.200">
          .
        </Heading>
        <Spacer />
        <Box display={['none', 'none', 'block']}>
          {menus.map((menu, index) => (
            <Button
              onClick={() => {
                navigate(menu.path)
              }}
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
              {menu.name}
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
          Let&apos;s chat
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
              <HStack justifyContent="center">
                {menus.map((menu, index) => (
                  <Button
                    variant="ghost"
                    onClick={() => navigate(menu.path)}
                    key={index}
                    _active={{
                      backgroundColor: 'transparent',
                    }}
                    _hover={{
                      backgroundColor: 'transparent',
                      textDecoration: 'underline',
                    }}
                  >
                    {menu.name}
                  </Button>
                ))}
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
      <Divider my={5} />
    </Box>
  )
}

export default Appbar
