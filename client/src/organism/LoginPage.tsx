import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { ReduxState } from "../types/ReduxState";
import ApiServices from "../ApiServices";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const userId = useSelector((state: ReduxState) => {
    return state.displayCategories.userId;
  });
  const notify = () =>
    toast.success("Welcome to Double-Mattress", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const updateEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const submitLogin = (e: any) => {
    e.preventDefault();
    setLoad(true);
    ApiServices.loginUser({ userId }).then((data: any) => {
      console.log(data[0]);
      dispatch({ type: "GET_USER_DATA", payload: data[0] });
      if(data[0].linkedUserIds.length>0){
      ApiServices.loginUser({userId:data[0].linkedUserIds[0]}).then((data:any)=>{
        dispatch({type: "GET_PARTNER_ID", payload:data[0].userId})
        dispatch({type: "GET_PARTNER_DATA", payload:data[0]})
      })
      }
    });

    setTimeout(() => {
      navigate("/dashboard");
      notify();
    }, 2000);
  };

  return (
    <VStack
      pt="1.5rem"
      h="90vh"
      spacing="6"
      bgImage="url('https://images.unsplash.com/photo-1426543881949-cbd9a76740a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <VStack
        align="center"
        color="gray.800"
        letterSpacing="wide"
        textAlign="center"
      >
        <Heading fontSize="4xl" color="orange">
          Sign in
        </Heading>
        <Text fontSize="2xl" fontWeight="500" color="yellow.50">
          to enjoy financial freedom
        </Text>
      </VStack>
      <VStack align="center" color="gray.100">
        <FormControl id="email" w={["300px", "400px", "500px"]}>
          <FormLabel>Email Address</FormLabel>
          <Input
            onChange={updateEmail}
            value={email}
            bgColor="blackAlpha.400"
            type="email"
            autoComplete="email"
            maxW="600px"
          />
        </FormControl>
        <FormControl id="password" w={["300px", "400px", "500px"]}>
          <FormLabel>Password</FormLabel>
          <Input bgColor="blackAlpha.400" type="password" maxW="600px" />
        </FormControl>
      </VStack>
      <Button
        isLoading={load}
        colorScheme="orange"
        as={ReactLink}
        to="/login"
        onClick={submitLogin}
      >
        Submit
      </Button>
    </VStack>
  );
}
