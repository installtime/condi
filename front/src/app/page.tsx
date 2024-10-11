import Image from "next/image";
import styles from "./page.module.css";
import MainPage from "./pages/Main/MainPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Официальный дистрибьютор сплит-систем и кондиционеров Haier.",
  description:
    "Оптовая продажа кондиционеров и сплит-систем Haier. Высокое качество, выгодные условия и быстрая доставка по Москве и области.",
};

const getMainPage = async () => {
  // http://localhost:1337/api/global?populate[recommend][populate]=preview
  const res = await fetch(
    `http://localhost:1337/api/global?populate[recommend][populate]=preview`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Home() {
  const { data } = await getMainPage();

  return (
    <main>
      <MainPage recommended={data.recommend} />
    </main>
  );
}
