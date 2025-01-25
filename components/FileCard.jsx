import { AiOutlineFolder } from "react-icons/ai"; // Folder icon from react-icons

const FileCard = ({ folderName, fileCount }) => {
  return (
    <div className="relative w-[280px] h-[320px] bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Icon as Background */}
      <div className="absolute inset-0 flex items-center justify-center text-blue-200">
        <AiOutlineFolder className="w-28 h-28 opacity-90 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full bg-gradient-to-b from-transparent to-white">
        <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 ease-in-out">
          {folderName}
        </h2>
        <p className="text-gray-500 mt-2 group-hover:text-gray-700 transition-colors duration-300 ease-in-out">
          {fileCount} files
        </p>
      </div>

      {/* Open Button at Top Right */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out">
          Open
        </button>
      </div>

      {/* Highlight on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-transparent to-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out z-0"></div>
    </div>
  );
};

export default FileCard;
