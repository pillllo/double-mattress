import { ProjectionCategory } from "../../atoms/index";
import { useSelector } from "react-redux";
import "./ProjectionCategoryBox.css";
import { ReduxState } from "../../types/ReduxState";
import { Flex, VStack } from "@chakra-ui/react";
import {useEffect,useState } from "react";
export default function ProjectionCategoryBox() {

  const projectionData = useSelector((state: ReduxState) => {

    return state.displayCategories.projectionData;
  });
  const date = useSelector((state: ReduxState) => {

    return state.displayCategories.projectionDate;
  }).getMonth();

 const [categories,setCategories]=useState<any[]>([])
//@ts-ignore

useEffect(()=>{
   const categoryArr =
     [
        "Home",
        "Bills and Services",
        "Shopping",
        "Entertainment",
        "Eating Out",
        "Others",
      ];
    if(projectionData.length){
    const newCategories = categoryArr.map((category) => {
      //@ts-ignore
    console.log("DEEZ PROJECT DATA",category,projectionData[date].categoryAverages[category])
    //@ts-ignore
    const price= projectionData[date].categoryAverages[category]

    return (
      <ProjectionCategory
        key={category}
        category={category}
        currency={"eur"}
        price={price}
      />
    );
  });
  setCategories(newCategories);
}
},[projectionData])

  return (
    <Flex align="center" direction="column" h="25vh" w="90vw" overflowY="auto">
      {categories}
    </Flex>
  );
}
