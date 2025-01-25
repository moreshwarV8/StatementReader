"use client";
import React, { useState } from "react";
import FileCard from "@/components/FileCard";
import UploadComponent from "@/components/UploadComponent";
import FileDetailsComponent from "@/components/FileDetailsComponent";
import DashboardHeading from "@/components/DashBoardHeading";

const Dashboard = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const folders = [
    { folderName: "Bills", fileCount: 25 },
    { folderName: "Credit", fileCount: 8 },
    { folderName: "Debit", fileCount: 15 },
    { folderName: "Others", fileCount: 25 },
    { folderName: "Pending", fileCount: 8 },
    { folderName: "Audit", fileCount: 15 },
    // Add more folders for testing
  ];

  const handleUploadToggle = () => setIsUploadOpen(!isUploadOpen);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
    setIsUploadOpen(false);
    setIsDetailsOpen(true);
  };

  const handleDetailsSubmit = (details) => {
    console.log("File Details:", details);
    setIsDetailsOpen(false);
  };

  const handleDetailsCancel = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <DashboardHeading />

      <div className="grid grid-cols-3 gap-6">
        {folders.map((folder, index) => (
          <FileCard
            key={index}
            folderName={folder.folderName}
            fileCount={folder.fileCount}
          />
        ))}
      </div>

      {/* Floating Upload Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={handleUploadToggle}
          className="p-4 bg-blue-600 w-[150px] text-white rounded-full shadow-lg hover:bg-blue-700"
        >
          Upload
        </button>
      </div>
      {/* Upload Modal */}
      {isUploadOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white shadow-xl rounded-xl w-full h-[400px] max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setIsUploadOpen(false)} // Close the modal
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Upload Component */}
            <UploadComponent onUpload={handleFileUpload} />
          </div>
        </div>
      )}

      {/* File Details Modal */}
      {isDetailsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <FileDetailsComponent
            onSubmit={handleDetailsSubmit}
            onCancel={handleDetailsCancel}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
