import { AiOutlineFolder } from "react-icons/ai"; // Folder icon from react-icons

const FileCard = ({ folderName, fileCount }) => {
  return (
    <div className="relative w-[300px] h-[350px] bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transition-transform transform hover:scale-105">
      
      {/* Icon as background */}
      <div className="absolute inset-0 flex items-center justify-center text-gray-200">
        <AiOutlineFolder className="w-32 h-32 opacity-90" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <h2 className="text-2xl font-medium text-gray-800">{folderName}</h2>
        <p className="text-gray-600 mt-1">{fileCount} files</p>
      </div>

      {/* Hover Effect: Buttons (appear on hover) */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-20">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out">
          Open
        </button>
      </div>
    </div>
  );
};

export default FileCard;
