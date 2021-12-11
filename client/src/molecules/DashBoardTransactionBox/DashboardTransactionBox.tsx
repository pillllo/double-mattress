<<<<<<< HEAD
import { DashboardTransaction } from "../../atoms/index";
import { Transaction } from "../../types/Transaction";
import "./DashboardTransactionBox.css";
type Props = {
  transactions: Transaction[];
};
export default function DashBoardTransactionBox({ transactions }: Props) {
  const transactionMono = transactions.map((transac) => {
    return (
      <DashboardTransaction
        title={transac.description}
        price={transac.amount / 100}
        currency={"eur"}
        date={transac.date}
      />
    );
  });
  return <div className="category-box">{transactionMono}</div>;
=======
import {DashboardTransaction} from '../../atoms/index'
import {Transaction} from '../../types/Transaction'
import"./DashboardTransactionBox.css"
type Props={
  transactions: Transaction[]
}
export default function DashBoardTransactionBox({transactions}:Props) {
  const transactionMono= transactions.map((transac)=>{
    return <DashboardTransaction title={transac.description} price={transac.amount} currency={"eur"} date={transac.date} />
  })
  return (
    <div className="category-box">
      {transactionMono}
    </div>
  )
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
}
