import { TransactionFor, TransactionMethod } from "@/features/transaction";
import { TransactProvider } from "@/features/transaction/contexts/TransactionContext";

const Transaction = () => {
  return (
    <section className="md:flex items-start relative h-screen overflow-y-scroll">
      <TransactProvider>
        <TransactionFor />
        <TransactionMethod />
      </TransactProvider>
    </section>
  );
};

export default Transaction;
