
import React, { useState } from 'react';
import Layout from "../layout/Layout";

const BackpackSettings = () => {
  const [provider, setProvider] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (provider) {
      alert('Backpack connected!');
    } else {
      setSubmitted(true);
    }
  };

  return (
    <Layout>
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Backpack settings</h1>

      <div className="bg-gray-100 p-4 rounded mb-6 flex items-center justify-between">
        <div className="font-semibold text-lg flex items-center gap-2">
          <span className="text-xl">▼</span> Connect to a backpack
          <span className="text-base cursor-help" title="Help connecting">❓</span>
        </div>
      </div>

      <label className="block text-lg mb-2 font-medium">Backpack provider</label>
      <div className="flex items-center gap-4">
        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          className={`border rounded px-4 py-2 ${submitted && !provider ? 'border-red-600' : 'border-gray-300'}`}
        >
          <option value="">Choose...</option>
          <option value="example1">Provider 1</option>
          <option value="example2">Provider 2</option>
        </select>
        {submitted && !provider && <span className="text-red-600 text-xl">❗</span>}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded font-semibold"
      >
        Connect to backpack
      </button>

      {submitted && !provider && (
        <p className="text-red-600 mt-2 flex items-center gap-1">
          <span>❗</span> Required
        </p>
      )}
    </div>
    </Layout>

  );
};

export default BackpackSettings;
