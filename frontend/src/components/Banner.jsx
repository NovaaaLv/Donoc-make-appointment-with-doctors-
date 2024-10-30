import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="capitalize flex bg-primary rounded-lg sm:px-14 lg:px-12 my-20 md:mx-10">
      {/* Left */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-16 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>book appointment</p>
          <p className="mt-4">with 100+ trusted doctors</p>
        </div>
        <button
          onClick={() => {
            navigate("login");
            scrollTo(0, 0);
          }}
          className="capitalize bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105"
        >
          create account
        </button>
      </div>
      {/* right */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          src={assets.appointment_img}
          alt=""
          className="absolute bottom-0 right-0 w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default Banner;
