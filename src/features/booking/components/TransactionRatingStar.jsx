import Rate from "./Rate";

const TransactionRatingStar = ({ comment, rate, handClick }) => {
  return (
    <Rate
      handleClick={comment ? null : handClick}
      rate={rate}
      className="transact-stars"
      size="w-20"
      statik={comment}
    />
  );
};

export default TransactionRatingStar;
