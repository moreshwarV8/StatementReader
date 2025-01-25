"use client";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

const UploadComponent = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showDetailsPanel, setShowDetailsPanel] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    setShowDetailsPanel(false); // Reset the panel when new files are selected
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      alert("Please select a file to upload.");
      return;
    }

    // Display details panel
    setShowDetailsPanel(true);
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100 h-[400px]" >
      <div className=" rounded-lg p-8 w-full max-w-2xl">
        {/* Upload Area */}
        <div className="text-center">
          <FiUploadCloud className="text-blue-500 mx-auto mb-4" size={50} />
          <h2 className="text-2xl font-bold text-gray-800">Upload PDF Files</h2>
          <p className="text-gray-500 mt-2">
            Drag and drop your PDF files here or click the button below to
            select files.
          </p>
        </div>
        <div
          className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-gray-50"
          onClick={() => document.getElementById("file-input").click()}
        >
          <input
            type="file"
            id="file-input"
            accept="application/pdf"
            className="hidden"
            multiple
            onChange={handleFileChange}
          />
          <p className="text-gray-500 text-center">Drop files here to upload</p>
        </div>

        {/* File List */}
        {selectedFiles.length > 0 && (
          <ul className="mt-4 space-y-2">
            {selectedFiles.map((file, index) => (
              <li
                key={index}
                className="bg-gray-50 p-3 rounded-lg text-gray-700 flex justify-between items-center"
              >
                {file.name}
                <span className="text-sm text-gray-500">
                  {(file.size / 1024).toFixed(1)} KB
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Upload Button */}
        <div className="mt-6">
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            onClick={handleUpload}
          >
            Upload Files
          </button>
        </div>
      </div>

      {/* Details Panel */}
      {showDetailsPanel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              File Details
            </h3>
            <p className="text-gray-700 mb-4">
              The following file(s) will be uploaded:
            </p>
            <ul className="space-y-2">
              {selectedFiles.map((file, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-3 rounded-lg text-gray-700"
                >
                  {file.name} - {(file.size / 1024).toFixed(1)} KB
                </li>
              ))}
            </ul>

            {/* Close Button */}
            <div className="mt-6">
              <button
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
                onClick={() => setShowDetailsPanel(false)}
              >
                Confirm Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadComponent;
