import React, { useState } from "react";

const FileDetailsComponent = ({ onSubmit, onCancel }) => {
  const [fields, setFields] = useState("");
  const [docType, setDocType] = useState("");
  const [isHandwritten, setIsHandwritten] = useState(false);

  const handleSubmit = () => {
    const details = { fields, docType, isHandwritten };
    onSubmit(details);
  };

  return (
    <div className="p-6 rounded-xl shadow-lg bg-white max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">File Details</h2>

      {/* Fields Input */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2 font-medium">
          Fields to Extract
        </label>
        <input
          type="text"
          value={fields}
          onChange={(e) => setFields(e.target.value)}
          placeholder="Enter fields (comma-separated)"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Document Type Select */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2 font-medium">
          Document Type
        </label>
        <select
          value={docType}
          onChange={(e) => setDocType(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Document Type</option>
          <option value="Invoice">Invoice</option>
          <option value="Receipt">Receipt</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      {/* Handwritten Checkbox */}
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          checked={isHandwritten}
          onChange={(e) => setIsHandwritten(e.target.checked)}
          className="mr-2"
        />
        <label className="text-gray-700">Is this document handwritten?</label>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FileDetailsComponent;
