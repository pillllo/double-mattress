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
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaHome,
  FaClock,
  FaCogs,
  FaAngleDoubleRight,
  FaBed,
} from "react-icons/fa";
import { Link as routerLink } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const buttonSize = useBreakpointValue(["sm", "md", "lg"]);

  return (
    <Flex w="full" h="10vh" bg="blue.700">
      <Flex align="center" p="5px">
        <IconButton
          aria-label="Open NavMenu"
          icon={<FaAngleDoubleRight />}
          size={buttonSize}
          onClick={onOpen}
          bgColor={"blue.800"}
          color={"white"}
          dropShadow={"large"}
        />
        <Text ml="5" fontSize={["xl", "2xl", "3xl"]}>
          Double-Mattress
        </Text>
      </Flex>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bgColor={"blue.700"} color={"white"}>
          <DrawerHeader borderBottomWidth="1px" fontSize="1.5rem">
            Navbar
          </DrawerHeader>
          <DrawerBody>
            <Link
              as={routerLink}
              to="/dashboard"
              fontSize="1.25rem"
              display="flex"
              alignItems="center"
              onClick={onClose}
            >
              <FaHome />
              <Divider orientation="vertical" mx="5px" /> Dashboard
            </Link>
            <Divider my={2} />
            <Link
              as={routerLink}
              to="/projections"
              fontSize="1.25rem"
              display="flex"
              alignItems="center"
              onClick={onClose}
            >
              <FaClock />
              <Divider orientation="vertical" mx="5px" />
              Projections
            </Link>
            <Divider my={2} />
            <Link
              as={routerLink}
              to="/dashboard"
              fontSize="1.25rem"
              display="flex"
              alignItems="center"
              onClick={onClose}
            >
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
