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
  FaInfo,
  FaAward,
<<<<<<< HEAD
  FaBell,
} from "react-icons/fa";
import { Link as routerLink } from "react-router-dom";
import { ConnectUserForm, MainButton } from "../atoms/index";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReduxState } from "../types/ReduxState";
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const dispatch = useDispatch();
  const buttonSize = useBreakpointValue(["sm", "md", "lg"]);
  const [alert, setAlert] = useState(false);

  const partnerConnected = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.mainUser?.linkedUserIds?.length > 0;
  });
=======
  FaBell
} from "react-icons/fa";
import { Link as routerLink } from "react-router-dom";
import {ConnectUserForm, MainButton} from "../atoms/index";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../types/ReduxState";
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure();
  const buttonSize = useBreakpointValue(["sm", "md", "lg"]);
  const [alert, setAlert]= useState(false);

>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
  const newNotif = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.notificationAlert;
  });
<<<<<<< HEAD
  const connectButton = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.mainUser?.firstName;
  });
  console.log(!!partnerConnected);
  useEffect(() => {
    setAlert(newNotif);
  }, [newNotif]);

  return (
    <Flex
      w="full"
      h="10vh"
      bgGradient="linear(to-b, blue.400, blue.800)"
      zIndex="1"
      justify="space-between"
      px="10px"
    >
      <Flex align="center">
=======

  useEffect(()=>{
    setAlert(newNotif)

  },[newNotif])


  return (
    <Flex w="full" h="10vh" bgGradient="linear(to-b, blue.400, blue.800)">
      <Flex align="center" p="5px">
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
        <IconButton
          aria-label="Open NavMenu"
          icon={<FaAngleDoubleRight />}
          size={buttonSize}
          onClick={onOpen}
          bgColor={"blue.800"}
          color={"white"}
          dropShadow={"large"}
        />
<<<<<<< HEAD
        <Text
          ml="5"
          fontWeight="600"
          fontSize={["xl", "2xl", "3xl"]}
          bgGradient="linear(to-r, blue.100, gray.200)"
          bgClip="text"
        >
=======
        <Text ml="5" fontWeight="600" fontSize={["xl", "2xl", "3xl"]}>
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
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
<<<<<<< HEAD
              boxShadow="none !important"
=======
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
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
              to="/testimonials"
              fontSize="1.25rem"
              display="flex"
              alignItems="center"
              onClick={onClose}
            >
              <FaAward />
              <Divider orientation="vertical" mx="5px" />
              Testimonial
            </Link>
            <Divider my={2} />
            <Link
              as={routerLink}
              to="/info"
              fontSize="1.25rem"
              display="flex"
              alignItems="center"
              onClick={onClose}
            >
              <FaInfo />
              <Divider orientation="vertical" mx="5px" />
              About us
            </Link>
            <Divider my={2} />
            <Link
              as={routerLink}
              to="/dashboard"
              fontSize="1.25rem"
              display="flex"
              alignItems="center"
<<<<<<< HEAD
=======
              onClick={onClose}
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
            >
              <FaCogs />
              <Divider orientation="vertical" mx="5px" />
              Settings
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
<<<<<<< HEAD

      {!!connectButton ? (
        <Flex alignItems="center">
          {partnerConnected ? null : (
            <MainButton passedFunction={() => onOpen2()} text={"Connect"} />
          )}
          <Link
            as={routerLink}
            to="/notifications"
            fontSize="1.25rem"
            display="flex"
            alignItems="center"
            onClick={onClose}
            ml="1rem"
          >
            <IconButton
              aria-label="Category Info"
              icon={<FaBell color={alert ? "B22222" : undefined} />}
              size={buttonSize}
              onClick={() => dispatch({ type: "NEW_NOTIFICATION", payload:false })}
            />
          </Link>
          <ConnectUserForm
            isOpen={isOpen2}
            onClose={onClose2}
            onOpen={onOpen2}
          />
        </Flex>
      ) : null}
=======
      <Flex alignItems="center">
      <MainButton  passedFunction={() => onOpen2()}text={"Connect"}/>
      <IconButton
            aria-label="Category Info"
            icon={<FaBell color={alert?"9b2226":undefined} />}
            size={buttonSize}
            onClick={() => setAlert(!alert)}
          />
      </Flex>
      <ConnectUserForm isOpen={isOpen2} onClose={onClose2} onOpen={onOpen2}/>
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
    </Flex>
  );
}
