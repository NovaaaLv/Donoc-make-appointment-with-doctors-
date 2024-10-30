import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left */}
        <div className="">
          <img src={assets.logo} alt="" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, tenetur corrupti!
            Suscipit, laboriosam corrupti maxime earum animi velit natus quidem impedit accusantium
            dignissimos! Aspernatur dolor quisquam quam sunt, ducimus consectetur.
          </p>
        </div>
        {/* center */}
        <div className="">
          <p className="uppercase text-xl font-bold mb-5 text-slate-800">company</p>
          <ul className="capitalize flex flex-col gap-2 text-gray-600">
            <li>home</li>
            <li>about us</li>
            <li>contact us</li>
            <li>privacy policy</li>
          </ul>
        </div>
        {/* right */}
        <div className="">
          <p className="uppercase text-xl font-bold  mb-5 text-slate-800">get in touch</p>
          <ul className="capitalize flex flex-col gap-2 text-gray-600">
            <li>+62 858 6149 8751</li>
            <li>nodevaaa@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* copyright */}
      <div className="">
        <hr className="h-[2px] bg-gray-300 border-0" />
        <p className="capitalize p-5 text-sm text-center text-slate-700">
          copyright 2024@ nodeva - all right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
