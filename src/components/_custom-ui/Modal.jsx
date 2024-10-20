import { motion } from "framer-motion";

export const ModalTrigger = ({ ...props }) => {
  return <div {...props} />;
};

export const Modal = ({ styling, ...props }) => {
  const { initial, animate, ...restProps } = props;
  return (
    <motion.section
      initial={initial}
      animate={animate}
      className={styling}
      {...restProps}
    />
  );
};

export const ModalSheet = ({ styling, ...props }) => {
  const { initial, animate, ...restProps } = props;
  return (
    <motion.div
      initial={initial}
      animate={animate}
      className={styling}
      onClick={(e) => e.stopPropagation()}
      {...restProps}
    />
  );
};
