import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "../layout/Layout";

const Badges = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="p-6 max-w-5xl mx-auto">
      {/* Judul utama */}
      <h1 className="text-3xl font-bold mb-6">
        My badges from Sistem Elearning SMKN 8 Malang web site
        <span className="ml-1 text-lg cursor-help" title="Badges info">❓</span>
      </h1>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-6">
        <label htmlFor="search" className="text-lg font-medium">
          Search by name
        </label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-64"
          placeholder="Type a name..."
        />
        <div className="flex gap-2">
          <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded">
            Search
          </button>
          <button
            onClick={() => setSearch('')}
            className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Info box */}
      <div className="bg-blue-100 text-blue-900 border border-blue-200 px-4 py-3 rounded mb-10 relative">
        There are currently no badges available for users to earn.
        <button className="absolute right-2 top-2 text-blue-600 hover:text-blue-800">
          ✕
        </button>
      </div>

      {/* Judul lainnya */}
      <h2 className="text-3xl font-bold mb-4">
        My badges from other web sites
        <span className="ml-1 text-lg cursor-help" title="More badge info">❓</span>
      </h2>

      {/* External badge connection */}
      <p className="mb-4 text-lg">
        To display external badges you need to{' '}
        <a href="#" className="text-blue-600 hover:underline">
          connect to a backpack
        </a>.
      </p>

      <button
        onClick={() => navigate('/backpack-settings')}
        className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded text-lg font-semibold"
      >
        Change backpack settings
      </button>
    </div>   
    </Layout>
   
  );
};

export default Badges;
