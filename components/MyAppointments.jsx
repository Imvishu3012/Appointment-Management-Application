export default function MyAppointments({
  appointments,
  cancelAppointment,
  setCurrentPage,
}) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-black">My Appointments</h2>

      {appointments.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-600 text-xl">No appointments booked yet</p>
          <button
            onClick={() => setCurrentPage("book")}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
          >
            Book Your First Appointment
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appointments.map((apt) => (
            <div key={apt.id} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold">{apt.patientName}</h3>
              <p>
                <strong>Doctor:</strong> {apt.doctor.name}
              </p>
              <p>
                <strong>Date:</strong> {apt.date}
              </p>
              <p>
                <strong>Time:</strong> {apt.time}
              </p>
              <button
                onClick={() => cancelAppointment(apt.id)}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded w-full"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
