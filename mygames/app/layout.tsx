import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./Providers";
import { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import { StoreProvider } from "@/store/StoreProvider";
import ClientPersistGate from "@/store/ClientPersistGate";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyNextLevelGames",
  description: "Play online Sudoku and Tic-Tac-Toe",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ClientPersistGate>
            <NavBar />
            {/* <MainHeader/> */}
            <AuthProvider>{children}</AuthProvider>
          </ClientPersistGate>
        </StoreProvider>
      </body>
    </html>
  );
}