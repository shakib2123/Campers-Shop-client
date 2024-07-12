import Lottie from "lottie-react";

import noDataFound from "../../assets/animations/no-data-found.json";

const NoDataFound = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Lottie animationData={noDataFound} loop={true} />
    </div>
  );
};

export default NoDataFound;
