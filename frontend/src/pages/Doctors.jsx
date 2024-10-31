import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);

  const specialities = [
    "general physician",
    "gynecologist",
    "dermatologist",
    "pediatricians",
    "neurologist",
    "gastroenterologist",
  ];

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doctors, speciality]);

  return (
    <div>
      <p className="capitalize text-gray-600">browse through the doctor specialists.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          {specialities.map((spec, index) => (
            <p
              key={index}
              onClick={() =>
                speciality === spec ? navigate("/doctors") : navigate(`/doctors/${spec}`)
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded cursor-pointer capitalize ${
                speciality === spec ? "bg-indigo-100 text-slate-800" : ""
              }`}
            >
              {spec}
            </p>
          ))}
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px]"
              key={index}
            >
              <img src={item.image} alt="" className="bg-blue-50" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <p className="w-2 h-2 bg-green-400 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-lg text-gray-900 font-medium capitalize">{item.name}</p>
                <p className="text-sm text-gray-600 capitalize">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
