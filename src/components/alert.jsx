import { motion, AnimatePresence } from "framer-motion";
import {
  BadgeInfo,
  CircleAlert,
  CircleCheck,
  TriangleAlert,
} from "lucide-react";

const severityStyles = {
  success: "bg-[#28a785]",
  error: "bg-[#dc3545] ",
  warning: "bg-[#ffc107]",
  info: "bg-[#17a2b8] ",
};

const iconMap = {
  success: <CircleCheck className="w-6 h-6" />,
  error: <CircleAlert className="w-6 h-6" />,
  warning: <TriangleAlert className="w-6 h-6" />,
  info: <BadgeInfo className="w-6 h-6" />,
};

const Alert = ({ type = "info", message }) => {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="w-full"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
      >
        <div
          className={` z-10 w-[100%] mx-auto flex items-center p-2.5 md:p-4 my-2 rounded-xl text-white ${severityStyles[type]}`}
        >
          <div className="mr-3 text-white">{iconMap[type]}</div>
          <p>{message}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
