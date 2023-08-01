import Providers from "@/providers/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CxMapper",
  description: "Create flows with CxMapper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
