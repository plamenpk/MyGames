import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./Providers";
import { ReactNode } from "react";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import { StoreProvider } from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <NavBar />
          {/* <MainHeader/> */}
          <AuthProvider>{children}</AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}