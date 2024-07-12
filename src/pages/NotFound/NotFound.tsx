import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/images/404.png";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 flex flex-col items-center justify-center py-28">
      <div className="max-w-xl">
        <img className="w-full h-full " src={NotFoundImage} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-3xl font-bold text-gray-700">Not Found</h2>
        <Link to="/">
          <Button className="bg-green-500 hover:bg-green-600 mt-4">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
