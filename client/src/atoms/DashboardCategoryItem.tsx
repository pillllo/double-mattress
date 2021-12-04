export default function DashboardCategoryItem(transaction: any, i: number) {
  return (
    <div key={i}>
      <p>{transaction.amount}</p>
      <p>hi</p>
    </div>
  );
}
