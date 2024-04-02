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
        <Carousel ranking={'bypopularity'} name={'Popular'} />
        <Carousel ranking={'all'} name={'All Animes'} />

      </MantineProvider>
    </>
  );
}
