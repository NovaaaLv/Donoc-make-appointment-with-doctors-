import { useState } from "react";
import { assets } from "../assets/assets";
const MyProfile = () => {
	const [userData, setUserData] = useState({
		name: "Edwart Wiguna",
		image: assets.profile_pic,
		email: "nova@gmail.com",
		phone: "+62 696 9696",
		address: {
			line1: "57th Cross, richmond",
			line2: "Circle church road, london",
		},
		gender: "male",
		dob: "2006-11-25 ",
	});

	const [isEdit, setIsEdit] = useState(false);

	return (
		<div className="max-w-lg flex flex-col gap-2 text-sm">
			<img src={userData.image} alt="" className="w-36 rounded" />
			{isEdit ? (
				<input
					type="text"
					value={userData.name}
					onChange={(e) =>
						setUserData((pref) => ({ ...pref, name: e.target.value }))
					}
					className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
				/>
			) : (
				<p className="font-medium text-3xl text-neutral-800 mt-4">
					{userData.name}
				</p>
			)}

			<hr className="bg-zinc-400 h-[1px] border-none" />
			<div className="">
				<p className="uppercase text-neutral-500 underline mt-3">
					contact information
				</p>
				<div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
					<p className="font-medium">Email Id :</p>
					<p className="text-blue-500">{userData.email}</p>
					<p className="font-medium">Phone :</p>
					{isEdit ? (
						<input
							type="text"
							value={userData.phone}
							onChange={(e) =>
								setUserData((pref) => ({ ...pref, phone: e.target.value }))
							}
							className="bg-gray-100 max-w-52"
						/>
					) : (
						<p className="text-blue-400">{userData.phone}</p>
					)}
					<p className="font-medium">Address : </p>
					{isEdit ? (
						<p>
							<input
								type="text"
								name=""
								id=""
								value={userData.address.line1}
								onChange={(e) =>
									setUserData((prev) => ({
										...prev,
										address: { ...prev.address, line1: e.target.value },
									}))
								}
								className="bg-gray-50"
							/>
							<br />
							<input
								type="text"
								name=""
								id=""
								value={userData.address.line2}
								onChange={(e) =>
									setUserData((prev) => ({
										...prev,
										address: { ...prev.address, line2: e.target.value },
									}))
								}
								className="bg-gray-50"
							/>
						</p>
					) : (
						<p className="text-gray-500">
							{userData.address.line1} <br /> {userData.address.line2}
						</p>
					)}
				</div>
			</div>

			<div className="">
				<p className="uppercase text-neutral-500 underline mt-3">
					basic information
				</p>
			</div>
			<div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
				<p className="font-medium">Gender : </p>
				{isEdit ? (
					<select
						name=""
						id=""
						value={userData.gender}
						onChange={(e) =>
							setUserData((pref) => ({ ...pref, gender: e.target.value }))
						}
						className="bg-gray-100 max-w-20"
					>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
				) : (
					<p className="text-gray-400">{userData.gender}</p>
				)}
				<p className="font-medium">Birthday : </p>
				{isEdit ? (
					<input
						type="date"
						value={userData.dob}
						onChange={(e) =>
							setUserData((pref) => ({ ...pref, dob: e.target.value }))
						}
						className="max-w-28 bg-gray-100"
					/>
				) : (
					<p className="text-gray-400">{userData.dob}</p>
				)}
			</div>

			<div className="mt-10">
				{isEdit ? (
					<button
						className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white"
						onClick={() => setIsEdit(false)}
					>
						Save Information
					</button>
				) : (
					<button
						className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white"
						onClick={() => setIsEdit(true)}
					>
						Edit
					</button>
				)}
			</div>
		</div>
	);
};

export default MyProfile;
