import { doctorsList } from "@/data/Doctors";

export default function BookAppointment({
  patientName,
  setPatientName,
  selectedDoctor,
  setSelectedDoctor,
  date,
  setDate,
  time,
  setTime,
  errors,
  bookAppointment,
  setCurrentPage,
}) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-black">Book Appointment</h2>
      <div className="bg-white p-8 rounded-lg shadow max-w-2xl">
        <div className="mb-4">
          <label className="block font-bold mb-2 text-black">Patient Name *</label>
          <input
            type="text"
            placeholder="Enter your Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full border text-black border-gray-300 p-2 rounded"
          />
          {errors.patientName && (
            <p className="text-red-600 text-sm">{errors.patientName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2 text-black">Select Doctor *</label>
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded text-black"
          >
            <option value="">Choose a doctor</option>
            {doctorsList.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name} - {d.specialization} (${d.fee})
              </option>
            ))}
          </select>
          {errors.selectedDoctor && (
            <p className="text-red-600 text-sm">{errors.selectedDoctor}</p>
          )}
        </div>

        <div className="mb-4 text-black">
          <label className="block font-bold mb-2 text-black">Date *</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
          />
          {errors.date && <p className="text-red-600 text-sm">{errors.date}</p>}
        </div>

        <div className="mb-4 text-black">
          <label className="block font-bold mb-2 text-black">Time *</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border p-2 rounded"
          />
          {errors.time && <p className="text-red-600 text-sm">{errors.time}</p>}
        </div>

        <div className="flex space-x-4">
          <button
            onClick={bookAppointment}
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            Book Appointment
          </button>
          <button
            onClick={() => setCurrentPage("doctors")}
            className="bg-gray-400 text-white px-6 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
