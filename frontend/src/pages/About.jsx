import { assets } from "./../assets/assets";
const About = () => {
  const cards = [
    {
      title: "Efficiency:",
      desk: "Streamlined appointment scheduling that fits into your busy lifestyle.",
    },
    {
      title: "Convenience:",
      desk: "Access to a network of trusted healthcare professionals in your area.",
    },
    {
      title: "Personalization",
      desk: "Tailored recommendations and reminders to help you stay on top of your health.",
    },
  ];

  return (
    <div>
      <div className="text-center text-2xl text-gray-500 pt-10">
        <p className="capitalize">
          about <span className="text-gray-700 font-semibold">us</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img src={assets.about_image} alt="" className="w-full max-w-[360px]" />
        <div className="capitalize flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 ">
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs
            conveniently and efficiently. At Prescripto, we understand the challenges individuals
            face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive
            to enhance our platform, integrating the latest advancements to improve user experience
            and deliver superior service. Whether you`re booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user.
            We aim to bridge the gap between patients and healthcare providers, making it easier for
            you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="">
        <p className="uppercase text-xl my-4 text-gray-500">
          why <span className="text-gray-700 font-semibold"> chose us</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        {cards.map((item, index) => (
          <div
            className="border bg-white px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white delay-0 text-gray-700"
            key={index}
          >
            <b className="uppercase">{item.title}</b>
            <p className="capitalize">{item.desk}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
