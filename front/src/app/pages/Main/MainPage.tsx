import About from "@/parts/AboutCompany/About";
import Advantages from "@/parts/Advantages/Advantages";
import Banner from "@/parts/Banner/Banner";
import CatalogList from "@/parts/CatalogList/CatalogList";
import NewsList from "@/parts/NewsList/NewsList";
import ProductList from "@/parts/ProductList/ProductList";
import Slider from "@/parts/Slider/Slider";

const MainPage = () => {
  return (
    <div>
      <Slider />
      <ProductList />
      <About />
      <CatalogList />
      <Advantages />
      <Banner />
      <NewsList />
    </div>
  );
};

export default MainPage;
