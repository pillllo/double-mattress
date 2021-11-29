import {
    Flex,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    useDisclosure,
    DrawerHeader,
    Link,
    Divider,
    Text,
    useBreakpointValue
  } from '@chakra-ui/react';
  import { FaHome, FaClock, FaCogs, FaAngleDoubleDown } from 'react-icons/fa';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const buttonSize = useBreakpointValue(['sm', 'md', 'lg']);

  return (
    <Flex h="75px" m="5">
      <Flex>
        <IconButton
          aria-label="Open NavMenu"
          icon={<FaAngleDoubleDown />}
          size={buttonSize}
          onClick={onOpen}
        />
        <Text ml="5" fontSize={['xl', '2xl', '3xl']}>
          Dashboard
        </Text>
      </Flex>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" fontSize="1.5rem">
            Navbar
          </DrawerHeader>
          <DrawerBody>
            <Link fontSize="1.25rem" display="flex" alignItems="center">
              <FaHome />
              <Divider orientation="vertical" mx="5px" /> Dashboard
            </Link>
            <Divider my={2} />
            <Link fontSize="1.25rem" display="flex" alignItems="center">
              <FaClock />
              <Divider orientation="vertical" mx="5px" />
              Projections
            </Link>
            <Divider my={2} />
            <Link fontSize="1.25rem" display="flex" alignItems="center">
              <FaCogs />
              <Divider orientation="vertical" mx="5px" />
              Settings
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
