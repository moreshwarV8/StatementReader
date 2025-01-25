// app/layout.js (or wherever your layout is)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar"; // Import the sidebar component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>{/* Add any meta tags or additional head content here */}</head>
      <body style={{ display: "flex" }}>
        <Sidebar /> {/* Render the Sidebar component */}
        <main style={{ marginLeft: "200px", flex: 1, padding: "1rem" }}>
          {" "}
          {/* Main content area */}
          {children}
        </main>
      </body>
    </html>
  );
}
