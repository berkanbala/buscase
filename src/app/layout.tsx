import { AppContext } from "@/common/context/appContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AllModals from "@/custom/modals/allModals/allModals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.scss";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bus-Case",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider store={undefined}> */}
        <AppContext>
          <AllModals />
          <ToastContainer theme="colored" />
          {children}
        </AppContext>
        {/* </Provider> */}
      </body>
    </html>
  );
}
