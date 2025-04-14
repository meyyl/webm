import React, { useState } from "react";

const NewEventModal = ({ onClose }) => {
  const [showMore, setShowMore] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: new Date(),
    description: "",
    location: "",
    durationType: "none",
    repeat: false,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-md w-[700px] max-h-[90vh] overflow-y-auto shadow-xl p-6 relative">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-bold">New event</h2>
          <button onClick={onClose} className="text-gray-500 text-xl">×</button>
        </div>

        {/* Title & Date */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Event title</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Date</label>
          <input
            type="datetime-local"
            className="w-full border px-3 py-2 rounded"
            value={formData.date.toISOString().slice(0, 16)}
            onChange={(e) => handleChange("date", new Date(e.target.value))}
          />
        </div>

        {/* Show more */}
        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="bg-teal-600 text-white px-3 py-1 rounded text-sm mb-4"
          >
            Show more...
          </button>
        )}

        {showMore && (
          <div className="space-y-4">
            {/* Description */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Description
              </label>
              <textarea
                className="w-full border px-3 py-2 rounded"
                rows="3"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold mb-1">Location</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-semibold mb-1">Duration</label>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="duration"
                    checked={formData.durationType === "none"}
                    onChange={() => handleChange("durationType", "none")}
                  />
                  Without duration
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="duration"
                    checked={formData.durationType === "until"}
                    onChange={() => handleChange("durationType", "until")}
                  />
                  Until
                </label>
                {formData.durationType === "until" && (
                  <input
                    type="datetime-local"
                    className="border px-2 py-1 rounded"
                    onChange={(e) => handleChange("endDate", new Date(e.target.value))}
                  />
                )}
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="duration"
                    checked={formData.durationType === "minutes"}
                    onChange={() => handleChange("durationType", "minutes")}
                  />
                  Duration in minutes
                </label>
                {formData.durationType === "minutes" && (
                  <input
                    type="number"
                    className="border px-2 py-1 rounded"
                    placeholder="e.g. 30"
                    onChange={(e) => handleChange("durationMinutes", e.target.value)}
                  />
                )}
              </div>
            </div>

            {/* Repeat */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.repeat}
                onChange={() => handleChange("repeat", !formData.repeat)}
              />
              <label>Repeat this event</label>
            </div>

            {/* Collapse */}
            <button
              onClick={() => setShowMore(false)}
              className="bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Show less...
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded font-semibold"
            onClick={() => {
              console.log("Saved:", formData);
              onClose();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewEventModal;
