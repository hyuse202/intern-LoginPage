import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header.jsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login Page",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main> {children}</main>
      </body>
    </html>
  );
}
