"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import DoctorsList from "@/components/DoctorsList";
import BookAppointment from "@/components/BookAppointment";

import MyAppointments from "@/components/MyAppointments";
import { doctorsList } from "@/data/Doctors";

export default function Page() {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState("doctors");
  const [patientName, setPatientName] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({});

  const bookAppointment = () => {
    setErrors({});
    const newErrors = {};
    if (!patientName) newErrors.patientName = "Name is required";
    if (!selectedDoctor) newErrors.selectedDoctor = "Select a doctor";
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    const doctor = doctorsList.find((d) => d.id === parseInt(selectedDoctor));
    setAppointments([
      ...appointments,
      { id: Date.now(), patientName, doctor, date, time },
    ]);
    setCurrentPage("appointments");
  };

  const cancelAppointment = (id) => {
    if (confirm("Are you sure you want to cancel this appointment?")) {
      setAppointments(appointments.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        appointments={appointments}
      />
      <div className="max-w-6xl mx-auto p-8">
        {currentPage === "doctors" && (
          <DoctorsList
            setSelectedDoctor={setSelectedDoctor}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === "book" && (
          <BookAppointment
            {...{
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
            }}
          />
        )}
        {currentPage === "appointments" && (
          <MyAppointments
            appointments={appointments}
            cancelAppointment={cancelAppointment}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}
