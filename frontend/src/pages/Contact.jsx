import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl uppercase pt-10 text-gray-500">
        <p>
          contact <span className="text-gray-700 font-semibold"> us</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row justify-center gap-10 mb-18 text-sm">
        <img src={assets.contact_image} alt="" className="w-full md:w-[360px]" />
        <div className="flex flex-col justify-center gap-6 items-start">
          <p className="uppercase font-semibold text-lg text-gray-600">Our OFFICE</p>
          <p className="text-gray-500">
            54709 Willms Station Suite 350,
            <br /> Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132 <br />
            Email: greatstackdev@gmail.com
          </p>
          <p className="uppercase font-semibold text-lg text-gray-600">Careers at PRESCRIPTO</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border border-gray-500 px-8 py-4 text-sm hover:bg-gray-500 hover:text-white text-gray-500 hover:rounded-xl">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
