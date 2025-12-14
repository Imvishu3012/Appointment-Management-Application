import { doctorsList } from "@/data/Doctors";

export default function DoctorsList({ setSelectedDoctor, setCurrentPage }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-black mb-6">Our Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {doctorsList.map((doctor) => (
          <div key={doctor.id} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-black">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialization}</p>
            <p className="text-green-600 font-bold mt-2">Fee: ₹{doctor.fee}</p>
            <button
              onClick={() => {
                setSelectedDoctor(doctor.id.toString());
                setCurrentPage("book");
              }}
              className="mt-4 bg-blue-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-700"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
