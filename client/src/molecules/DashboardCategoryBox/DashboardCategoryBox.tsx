import DashboardCategory from "../../atoms/DashboardCategory";
import {Transaction} from '../../types/Transaction'
import "./DashboardCategory.css"
type Props={
  transactions: Transaction[]
}

export default function DashboardCategoryBox({transactions}:Props) {

  const categoryArr=["Income","Rent","Utilites", "Shopping", "Entertainment","Eating Out","Others"];
  const categories= categoryArr.map((category)=>{
   const transactionsFiltered= transactions.filter((transac)=> transac.category===category);
   let totalCategory=0;
    for(let el of transactionsFiltered){
      totalCategory+=el.amount;
    }
    return <DashboardCategory title={category} currency={"eur"} price={totalCategory} transactionList={transactionsFiltered}/>
  })

  return (
    <div className="category-box">
      {categories}
    </div>
  )
}
