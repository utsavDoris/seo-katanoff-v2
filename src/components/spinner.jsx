import Lottie from "lottie-react";
import loader from "@/assets/animations/loader.json";

const Spinner = ({ className }) => {
  return (
    <div className={className}>
      <Lottie loop={true} animationData={loader} className="h-14" />
    </div>
  );
};

export default Spinner;
