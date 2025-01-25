import FileCard from "@/components/FileCard";

const Dashboard = () => {
  // Sample data for folders
  const folders = [
    { folderName: "Documents", fileCount: 25 },
    { folderName: "Images", fileCount: 8 },
    { folderName: "Videos", fileCount: 15 },
    { folderName: "Music", fileCount: 10 },
    { folderName: "Downloads", fileCount: 5 },
    { folderName: "Projects", fileCount: 30 },
    { folderName: "Reports", fileCount: 50 },
    { folderName: "Archives", fileCount: 12 },
    { folderName: "Work", fileCount: 20 },
    { folderName: "Personal", fileCount: 18 },
    { folderName: "Miscellaneous", fileCount: 9 },
    { folderName: "Travel", fileCount: 6 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-semibold mb-6 text-gray-900">Dashboard</h1>

      {/* Grid container for cards */}
      <div className="grid grid-cols-3 gap-6 p-4 overflow-x-auto">
        {/* Map through the folders and display FileCard */}
        {folders.map((folder, index) => (
          <FileCard
            key={index}
            folderName={folder.folderName}
            fileCount={folder.fileCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
