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
import {useDispatch, useSelector } from "react-redux";
import ApiServices from "../ApiServices";
export default function LoginPage() {
  const dispatch= useDispatch();
  const [load, setLoad] = useState(false);
  const [email, setEmail]= useState("");
  const navigate = useNavigate();

  const notify = () =>
    toast.success("Welcome to FeetPicsCentral", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    const updateEmail= (e:any)=>{
      setEmail(e.target.value);
    }
    const submitEmail= (e:any)=>{
      e.preventDefault();
      setLoad(true);
      ApiServices.addProjection({email}).then((data:any)=>{
        console.log(data);
      dispatch({type:"GET_USER_DATA",payload:data})
      })

      navigate("/dashboard");
      notify();

      // setTimeout(() => {
      //   navigate("/dashboard");
      //   notify();
      // }, 2000);


    }

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
        <Heading fontSize="4xl">Sign in to your account</Heading>
        <Text fontSize="2xl" fontWeight="500" color="yellow.50">
          to enjoy financial freedom
        </Text>
      </VStack>
      <VStack align="center" color="gray.100">
        <FormControl id="email" w="60vw">
          <FormLabel>Email Address</FormLabel>
          <Input
            OnChange= {updateEmail}
            value={email}
            bgColor="blackAlpha.400"
            type="email"
            autoComplete="email"
            maxW="600px"
          />
        </FormControl>
        <FormControl id="password" w="60vw">
          <FormLabel>Password</FormLabel>
          <Input bgColor="blackAlpha.400" type="password" maxW="600px" />
        </FormControl>
      </VStack>
      <Button
        isLoading={load}
        colorScheme="orange"
        as={ReactLink}
        to="/login"
        onClick={submitEmail}
      >
        Submit
      </Button>
    </VStack>
  );
}
