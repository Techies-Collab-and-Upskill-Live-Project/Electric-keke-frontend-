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
      <h3 className="text-xl font-bold">{type === 'success' ? 'Success' : 'Error'}</h3>
      <p className="font-medium">{msg}</p>

    </motion.div>
  );
};

export default Alert;
