import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const MyAppointments = () => {
	const { doctors } = useContext(AppContext);
	console.log(doctors);

	return (
		<div>
			<p className="capitalize pb-3 mt-12 font-medium text-zinc-700 border-b">
				my appointments
			</p>
			<div className="">
				{doctors.slice(0, 2).map((item, index) => (
					<div
						className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
						key={index}
					>
						<div className="">
							<img className="w-32 bg-indigo-50" src={item.image} alt="" />
						</div>
						<div className="flex-1 text-sm text-zinc-600">
							<p className="text-neutral-800 font-semibold">{item.name}</p>
							<p>{item.speciality}</p>
							<p className="text-zinc-700 font-medium mt-1 ">Address</p>
							<p className="text-xs">{item.address.line1}</p>
							<p className="text-xs">{item.address.line2}</p>
							<p className="capitalize text-sm mt-1">
								<span className="text-sm text-neutral-700 font-medium">
									date and time :{" "}
								</span>{" "}
								25, July, 2024 | 8.30 PM
							</p>
						</div>
						<div className=""></div>
						<div className="flex flex-col gap-2 justify-end">
							<button className="capitalize text-sm text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white">
								pay online
							</button>
							<button className="capitalize text-sm text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white">
								cancel appointment
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyAppointments;
