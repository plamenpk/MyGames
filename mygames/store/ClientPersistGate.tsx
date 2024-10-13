"use client";  

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/store/store";
import { ReactNode } from "react";

export default function ClientPersistGate({ children }: { children: ReactNode }) {
  return <PersistGate loading={null} persistor={persistor}>{children}</PersistGate>;
}