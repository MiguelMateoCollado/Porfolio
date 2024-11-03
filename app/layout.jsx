import { Inter } from "next/font/google";
import "./globals.css";
import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"] });
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Downbar from "./components/Downbar";
export const metadata = {
  title: "Porfolio",
  description: "Created by Miguel Angel Mateo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <main className=" min-h-screen  from-[#272121] bg-gradient-to-tr to-[#443737]  ">
          <Navbar />
          <Sidebar />
          <Downbar />
          {children}
        </main>
      </body>
    </html>
  );
}
