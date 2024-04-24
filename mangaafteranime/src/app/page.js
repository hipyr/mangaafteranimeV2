import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar/Navbar";
import MainCard from "@/components/MainCard/MainCard";
import Carousel from "@/components/Carousel/Carousel";
import { MantineProvider } from "@mantine/core";
export default function Home() {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Navbar />
        <MainCard />
        <Carousel rankingtype={'bypopularity'} name={'Popular'} />
        <Carousel rankingtype={'all'} name={'All Animes'} />

      </MantineProvider>
    </>
  );
}
