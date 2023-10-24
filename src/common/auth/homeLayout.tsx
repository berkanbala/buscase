"use client";
import Home from "@/custom/pages/home/home";
import { Header } from "../components/ui/header/header";
import { BusReserve } from "@/custom/components/busReserve/busReserve";
import { useAppContext } from "../context/appContext";
import { SearchBar } from "@/custom/components/searchBar/searchBar";
import { Footer } from "../components/ui/footer/footer";

export const HomeLayout = () => {
  const { user } = useAppContext();

  const renderIsAuth = () => {
    if (user.auth) {
      return (
        <>
          <Header />
          {/* <SearchBar /> */}
          <BusReserve />
          <Footer />
        </>
      );
    } else {
      return <Home />;
    }
  };

  return renderIsAuth();
};
