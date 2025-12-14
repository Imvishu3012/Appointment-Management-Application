"use client";
export default function Navbar({ currentPage, setCurrentPage, appointments }) {
  return (
    <div className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Appointment Portal</h1>
        <div className="space-x-4 ">
          <button
            onClick={() => setCurrentPage("doctors")}
            className={`px-2 py-1 md:px-4 md:py-2 rounded cursor-pointer ${
              currentPage === "doctors" ? "bg-blue-800" : "bg-blue-500"
            }`}
          >
            Doctors
          </button>
          <button
            onClick={() => setCurrentPage("book")}
            className={`px-2 py-1 md:px-4 md:py-2 rounded cursor-pointer ${
              currentPage === "book" ? "bg-blue-800" : "bg-blue-500"
            }`}
          >
            Book Appointment
          </button>
          <button
            onClick={() => setCurrentPage("appointments")}
            className={`px-2 py-1 md:px-4 md:py-2 rounded- cursor-pointer ${
              currentPage === "appointments" ? "bg-blue-800" : "bg-blue-500"
            }`}
          >
            My Appointments
          </button>
        </div>
      </div>
    </div>
  );
}
