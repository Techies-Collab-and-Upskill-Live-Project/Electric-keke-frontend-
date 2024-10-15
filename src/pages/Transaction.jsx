import { RateRiderModal } from "@/features/booking";
import { PaymentFor, PaymentMethod } from "@/features/transaction";

const Transaction = () => {
  return (
    <>

      <section className="md:flex items-start relative h-screen overflow-y-scroll">
        <PaymentFor />
        <PaymentMethod />
      </section>
    </>
  );
};

export default Transaction;
