import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="flex flex-col gap-4 py-16 items-center text-gray-800">
      <h1 className="capitalize text-3xl font-medium">find by speciality</h1>
      <p className="capitalize sm:w-1/3 text-center text-sm">
        simply browse through our extensive list of trusted doctors, schedule your appoinment
        hassle-free
      </p>
      <div className="flex items-center justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            to={`/doctors/${item.speciality}`}
            key={index}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px]"
          >
            <img src={item.image} alt="" className="w-16 sm:w-24 mb-2" />
            <p>{item.speciality}</p>
          </Link>
          // <Link
          //   to={`/doctors/${item.speciality}`}
          //   key={index}
          //   className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px]"
          // >
          //   <img src={item.image} alt="" className="w-16 sm:w-24 mb-2" />
          //   <p>{item.speciality}</p>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
