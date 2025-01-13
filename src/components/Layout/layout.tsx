import { ReactNode } from "react";
import Header from "@/components/Header/header";

export default function Layout({ children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
