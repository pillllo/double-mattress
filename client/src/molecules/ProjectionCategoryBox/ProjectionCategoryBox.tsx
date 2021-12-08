import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";

import { ProjectionCategory } from "../../atoms/index";
import "./ProjectionCategoryBox.css";
import { ReduxState } from "../../types/ReduxState";

export default function ProjectionCategoryBox() {
  const projectionData = useSelector((state: ReduxState) => {
    return state.displayCategories.projectionData;
  });
  const date = useSelector((state: ReduxState) => {
    return state.displayCategories.projectionDate;
  }).getMonth();
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const categoryArr = [
      "Home",
      "Bills and Services",
      "Shopping",
      "Entertainment",
      "Eating Out",
      "Others",
    ];
    if (projectionData.length) {
      const newCategories = categoryArr.map((category) => {
        //@ts-ignore
        const price = projectionData[date].categoryAverages[category];

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
  }, [projectionData]);

  return (
    <Flex align="center" direction="column" h="25vh" w="90vw" overflowY="auto">
      {categories}
    </Flex>
  );
}
