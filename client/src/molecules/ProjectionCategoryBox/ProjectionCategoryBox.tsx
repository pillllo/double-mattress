import { ProjectionCategory } from "../../atoms/index";
import { useSelector } from "react-redux";
import "./ProjectionCategoryBox.css";
import { State } from "../../reducers/displayReducers";
import { Flex, VStack } from "@chakra-ui/react";

export default function ProjectionCategoryBox() {

  const projectionData = useSelector((state: State) => {
    //@ts-ignore
    return state.displayCategories.projectionData;
  });
  const date = useSelector((state: State) => {
    //@ts-ignore
    return state.displayCategories.projectionDate;
  }).getMonth();


  const categoryArr =
     [
        "Rent",
        "Bills and Services",
        "Shopping",
        "Entertainment",
        "Eating Out",
        "Others",
      ];


  const categories = categoryArr.map((category) => {

    return (
      <ProjectionCategory
        category={category}
        currency={"eur"}
        price={projectionData[date].categoryAverage[category]}
      />
    );
  });

  // return <div className="category-box">{categories}</div>;
  return (

    <Flex align="center" direction="column" h="35vh" w="90vw" overflowY="auto">

      {categories}
    </Flex>
  );
}
