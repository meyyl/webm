import React from "react";

const DayView = ({ selectedDate, setSelectedDate }) => {
  const nextDay = () => {
    const tomorrow = new Date(selectedDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow);
  };

  const prevDay = () => {
    const yesterday = new Date(selectedDate);
    yesterday.setDate(yesterday.getDate() - 1);
    setSelectedDate(yesterday);
  };

  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const prevDayName = new Date(selectedDate);
  prevDayName.setDate(prevDayName.getDate() - 1);
  const prevLabel = prevDayName.toLocaleDateString("en-GB", { weekday: "long" });

  const nextDayName = new Date(selectedDate);
  nextDayName.setDate(nextDayName.getDate() + 1);
  const nextLabel = nextDayName.toLocaleDateString("en-GB", { weekday: "long" });

  return (
    <div className="mt-4 px-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevDay} className="text-sm text-gray-600">
          ◀ {prevLabel}
        </button>
        <h2 className="text-lg font-semibold">{formattedDate}</h2>
        <button onClick={nextDay} className="text-sm text-gray-600">
          {nextLabel} ▶
        </button>
      </div>

      <p className="text-gray-700 mb-6">There are no events this day.</p>

    </div>
  );
};

export default DayView;
