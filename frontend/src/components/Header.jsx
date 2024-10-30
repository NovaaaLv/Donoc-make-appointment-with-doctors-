import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10px lg:px-20">
      {/* Left */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="capitalize text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          book appoinment <br />
          with trusted doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-gray-300 text-sm font-light">
          <img src={assets.group_profiles} alt="" className="w-28" />
          <p className="capitalize">
            simply browse through our extensive list of trusted doctors,
            <br className="hidden md:block" />
            schedule your appoinment hassle-free
          </p>
        </div>
        <a
          href="#speciality"
          className="capitalize flex items-center gap-3 py-3 px-8 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 bg-white"
        >
          book appoinment <img src={assets.arrow_icon} alt="" className="w-3" />
        </a>
      </div>

      {/* Right */}
      <div className="md:w-1/2 relative">
        <img
          src={assets.header_img}
          alt=""
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
