import DarkModeBtn from "@/components/DarkModeBtn";
import Header from "@/components/Header";
import { useTheme } from "@/components/ThemeMode";
import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute("id", theme);
  }, [theme]);
  return (
    <>
      <DarkModeBtn />
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
