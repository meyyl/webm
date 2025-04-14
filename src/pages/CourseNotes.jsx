import React, { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import Layout from "../layout/Layout";

const CourseNotes = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('all');

  const courses = [
    { id: 'all', name: 'All courses' },
    { id: 'math101', name: 'Math 101' },
    { id: 'phys201', name: 'Physics 201' },
    { id: 'cs301', name: 'CS 301' },
  ];

  const handleApplyFilters = () => {
    console.log('Applied filter:', selectedCourse);
    // Lanjutkan fetch data sesuai course di sini
  };

  return (
    <Layout>
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">Manage notes</h1>

      <div className="mb-4">
        <button
          onClick={() => setShowFilters(prev => !prev)}
          className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition"
        >
          <SlidersHorizontal className="w-5 h-5" />
          Filters
        </button>
      </div>

      {showFilters && (
        <div className="border rounded-md p-4 mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Course
          </label>

          <div className="flex items-center gap-4 mb-4">
            {selectedCourse === 'all' && (
              <span className="flex items-center bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                <X className="w-4 h-4 mr-1 cursor-pointer" onClick={() => setSelectedCourse('')} />
                All courses
              </span>
            )}

            <select
              value={selectedCourse}
              onChange={e => setSelectedCourse(e.target.value)}
              className="border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Search</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleApplyFilters}
            className="bg-red-700 hover:bg-red-800 text-white font-semibold px-5 py-2 rounded"
          >
            Apply filters
          </button>
        </div>
      )}

      <div className="bg-blue-100 text-gray-700 px-6 py-4 rounded-md">
        Nothing to display
      </div>
    </div>
    </Layout>
  );
};

export default CourseNotes;
