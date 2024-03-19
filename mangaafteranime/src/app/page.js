import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar/Navbar";
import MainCard from "@/components/MainCard/MainCard";
import PopularCarousel from "@/components/PopularCarousel/PopularCarousel";
import { MantineProvider } from "@mantine/core";
export default function Home() {
  return (
    <>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navbar />
      <MainCard />
      <PopularCarousel />
      </MantineProvider>
    </>
  );
}
