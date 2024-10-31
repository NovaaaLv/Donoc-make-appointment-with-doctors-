import { useState } from "react";
import { assets } from "../assets/assets";
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edwart Wiguna",
    image: assets.profile_pic,
    email: "nova@gmail.com",
    phone: "+62 696 9696",
    addres: {
      line1: "57th Cross, richmond",
      line2: "Circle church road, london",
    },
    gender: "male",
    dob: "2006-11-25 ",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) => setUserData((pref) => ({ ...pref, name: e.target.value }))}
        />
      ) : (
        <p>{userData.name}</p>
      )}

      <hr />
      <div className="">
        <p className="uppercase">contact information</p>
        <div className="">
          <p>Email Id :</p>
          <p>{userData.email}</p>
          <p>Phone :</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) => setUserData((pref) => ({ ...pref, name: e.target.value }))}
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Addres : </p>
          {isEdit ? (
            <p>
              <input
                type="text"
                name=""
                id=""
                value={userData.addres.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.addres, line1: e.target.value },
                  }))
                }
              />
              <br />
              <input
                type="text"
                name=""
                id=""
                value={userData.addres.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.addres, line2: e.target.value },
                  }))
                }
              />
            </p>
          ) : (
            <p>
              {userData.addres.line1} <br /> {userData.addres.line2}
            </p>
          )}
        </div>
      </div>

      <div className="">
        <p className="uppercase">basic information</p>
      </div>
      <div className="">
        <p>Gender : </p>
        {isEdit ? (
          <select
            name=""
            id=""
            value={userData.gender}
            onChange={(e) => setUserData((pref) => ({ ...pref, gender: e.target.value }))}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        ) : (
          <p>{userData.gender}</p>
        )}
        <p>Birthday : </p>
        {isEdit ? (
          <input
            type="date"
            name=""
            id=""
            value={userData.dob}
            onChange={(e) => setUserData((pref) => ({ ...pref, dob: e.target.value }))}
          />
        ) : (
          <p>{userData.dob}</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
