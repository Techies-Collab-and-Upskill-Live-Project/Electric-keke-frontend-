import { TransactionFor, TransactionMethod } from "@/features/transaction";

const Transaction = () => {
  return (
    <section className="md:flex items-start relative h-screen overflow-y-scroll">
      <TransactionFor />
      <TransactionMethod />
    </section>
  );
};

export default Transaction;
