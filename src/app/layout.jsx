import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login Page",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
      <div className='w-full h-[100vh]'>{children}

      </div>
      </body>
    </html>
  );
}
