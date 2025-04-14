import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
} from "date-fns";
import Layout from "../layout/Layout";
import NewEventModal from "./NewEventModal";
import DayView from "./DayView";


const events = {
  "2025-04-04": "TUGAS MATERI ORDE ...",
  "2025-04-16": "Bab 6 is due",
  "2025-04-17": "PANATACARA is due",
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showModal, setShowModal] = useState(false)
  const [viewType, setViewType] = useState("month"); // atau "day"
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());


  const handlePrev = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNext = () => setCurrentMonth(addMonths(currentMonth, 1));

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <button
        onClick={handlePrev}
        className="text-gray-600 hover:text-black text-lg font-bold"
      >
        &lt;
      </button>
      <h2 className="text-xl font-bold">
        {format(currentMonth, "MMMM yyyy")}
      </h2>
      <button
        onClick={handleNext}
        className="text-gray-600 hover:text-black text-lg font-bold"
      >
        &gt;
      </button>
    </div>
  );

  const renderDays = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return (
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-700">
        {days.map((day) => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const today = new Date();
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const fullDate = format(day, "yyyy-MM-dd");
        const isToday = isSameDay(day, today);
        const isCurrentMonth = isSameMonth(day, currentMonth);
        const event = events[fullDate];

        days.push(
          <div
            key={day}
            className={`p-2 h-24 border text-sm relative transition-all
              ${isCurrentMonth ? "bg-white" : "bg-gray-100 text-gray-400"}
              ${isToday ? "border-blue-500" : ""}
            `}
          >
            <div
              className={`w-6 h-6 text-center rounded-full font-semibold ${
                isToday ? "bg-blue-600 text-white" : ""
              }`}
            >
              {formattedDate}
            </div>
            {event && (
              <div className="absolute bottom-2 left-2 right-2 text-xs text-red-600 truncate">
                🔴 {event}
              </div>
            )}
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <Layout>
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-xl">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
        <button
    className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium"
    onClick={() => setShowDropdown(!showDropdown)}
  >
    {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
  </button>
  {showDropdown && (
    <div className="absolute z-10 mt-1 w-28 bg-white border shadow-md rounded">
      <button
        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
        onClick={() => {
          setViewType("month");
          setShowDropdown(false);
        }}
      >
        Month
      </button>
      <button
        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
        onClick={() => {
          setViewType("day");
          setShowDropdown(false);
        }}
      >
        Day
      </button>
    </div>
  )}
          <select className="border rounded-md px-2 py-1 text-sm">
            <option>All courses</option>
          </select>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold"
        >
          New event
        </button>
      </div>

      {viewType === "month" ? (
  <>
    {renderHeader()}
    {renderDays()}
    {renderCells()}
  </>
) : (
  <DayView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

)}


      {/* Modal */}
      {showModal && <NewEventModal onClose={() => setShowModal(false)} />}


      <div className="mt-4 text-blue-600 text-sm underline cursor-pointer">
        Import or export calendars
      </div>
    </div>
    </Layout>
  );
};

export default Calendar;
