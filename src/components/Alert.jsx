import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const alertTheme = {
  container: {
    success: "alert--success",
    danger: "alert--danger",
  },
};

const Alert = () => {
  const {
    alert: { msg, type },
  } = useSelector((state) => state.global);

  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      exit={{ y: -200, opacity: 0 }}
      className={`alert-container ${alertTheme.container[type]}`}
    >
      <p>{msg}</p>

      {/* <div className="alert-stats">
        <img src="/tick.svg" alt="tick" className="size-5" />
      </div> */}
    </motion.div>
  );
};

export default Alert;
