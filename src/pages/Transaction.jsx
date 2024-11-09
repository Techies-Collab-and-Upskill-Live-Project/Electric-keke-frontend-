import { TransactionFor, TransactionMethod } from "@/features/transaction";

const Transaction = () => {
  return (
    <section className="relative items-start h-screen overflow-y-scroll md:flex no-scrollbar">
      <TransactionFor />
      <TransactionMethod />
    </section>
  );
};

export default Transaction;
