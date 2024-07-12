import Lottie from "lottie-react";
import error from "../../assets/animations/error.json";

const Error = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Lottie animationData={error} loop={true} />
    </div>
  );
};

export default Error;
