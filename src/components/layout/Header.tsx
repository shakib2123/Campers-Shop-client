import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="min-h-[100px] h-full  bg-gray-900">
      <div>
        <Link to="/"></Link>
      </div>
      <div>hi</div>
    </div>
  );
};

export default Header;
