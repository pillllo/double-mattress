import DashboardTransaction from '../../atoms/DashboardTransaction'
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
}
