import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Textarea,
  useDisclosure,
  ModalCloseButton,
  InputGroup,
  InputLeftAddon,
  Checkbox,
  CheckboxGroup,
  Select,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ApiServices from '../ApiServices'
import {useDispatch } from "react-redux";
import {toast } from 'react-toastify';
interface TheProp {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
}

export default function ProjectionForm({ onClose, onOpen, isOpen }: TheProp) {
  const [newProjection, setNewProjection] = useState({ type:"expense", amount:0,currency:"eur",category: "",date:new Date(), description:"",includeAvg:false })
  const dispatch= useDispatch();
  const notify = () => toast("Wow so easy!");
  const handleChange= (e:any)=>{
    const value= e.target.value
    console.log(value);
    if(e.target.name!=="amount" && value.charAt(0)===value.charAt(0).toUpperCase()){
      setNewProjection({...newProjection,category:value})
    }
    else setNewProjection({...newProjection,[e.target.name]:value})

    console.log(newProjection)
  }
  const submitProjection=()=>{
    // ApiServices.addProjection(newProjection).then((data)=>{
    //   console.log(data);
    // dispatch({type:"GET_PROJECTION_DATA",payload:data})
    // })
    notify()
  }

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Projection Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select onChange={handleChange} isRequired placeholder='Select category' >
              <option value='Home'>Home</option>
              <option value='Bills'>Bills and Services</option>
              <option value='Shopping'>Shopping</option>
              <option value='Entertainment'>Entertainment</option>
              <option value='Eating'>Eating Out</option>
              <option value='Others'>Others</option>
            </Select>
            <FormLabel>Description</FormLabel>
            <Input onChange={handleChange} name={"description"} value={newProjection.description} type="text" size="md" variant="filled"></Input>
            <FormLabel>Amount</FormLabel>
            <InputGroup mb="10px">
              <InputLeftAddon children="$" color="blue.700" />
              <Input onChange={handleChange} name={"amount"} value={newProjection.amount} type="number"></Input>
            </InputGroup>
            <DatePicker
      selected={newProjection.date}
      onChange={(newDate:Date)=>{setNewProjection({...newProjection,date:newDate})}}
      minDate={new Date()}
      withPortal
      dateFormat="MM/yyyy"
      showMonthYearPicker
    >
      <Text alignSelf="center" my="0.75rem">
        Choose a date
      </Text>
    </DatePicker>
            <Checkbox >Include Avg</Checkbox>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={()=>{submitProjection(); onClose()}}>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
