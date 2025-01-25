// import React from "react";

// const Sidebar = () => {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "200px",
//         height: "100vh",
//         backgroundColor: "#f0f0f0",
//         padding: "1rem",
//         boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
//         zIndex: 10,
//       }}
//     >
//       <nav>
//         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//           <li style={{ marginBottom: "1rem" }}>
//             <a
//               href="#home"
//               style={{
//                 textDecoration: "none",
//                 color: "#333",
//                 fontWeight: "bold",
//               }}
//             >
//               Home
//             </a>
//           </li>
//           <li style={{ marginBottom: "1rem" }}>
//             <a
//               href="#about"
//               style={{
//                 textDecoration: "none",
//                 color: "#333",
//                 fontWeight: "bold",
//               }}
//             >
//               About
//             </a>
//           </li>
//           <li style={{ marginBottom: "1rem" }}>
//             <a
//               href="#info"
//               style={{
//                 textDecoration: "none",
//                 color: "#333",
//                 fontWeight: "bold",
//               }}
//             >
//               Info
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";
import { Home, Info, User } from "lucide-react"; // Icons for a modern touch

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-52 h-screen bg-gray-900 text-white shadow-lg flex flex-col justify-between"
      style={{ width: "200px" }} // Custom width
    >
      {/* Logo and Navigation Links */}
      <div className="p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-center mb-6 tracking-wide">
          MyApp
        </h1>

        {/* Navigation Links */}
        <nav>
          <ul className="space-y-3">
            <li>
              <a
                href="#home"
                className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded-md transition"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded-md transition"
              >
                <User className="w-5 h-5" />
                <span>About</span>
              </a>
            </li>
            <li>
              <a
                href="#info"
                className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded-md transition"
              >
                <Info className="w-5 h-5" />
                <span>Info</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <p className="text-xs text-center text-gray-500">
          © 2025 MyApp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
