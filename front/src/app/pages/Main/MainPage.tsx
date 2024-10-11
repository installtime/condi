import CategoryList from "@/app/components/CategoryList/CategoryList";
import About from "@/parts/AboutCompany/About";
import Advantages from "@/parts/Advantages/Advantages";
import Banner from "@/parts/Banner/Banner";
import NewsList from "@/parts/NewsList/NewsList";
import Partners from "@/parts/Partners/Partners";
import ProductList from "@/parts/ProductList/ProductList";
import Slider from "@/parts/Slider/Slider";

const MainPage = ({ recommended }: any) => {
  return (
    <div>
      <Slider />
      <Advantages />
      <ProductList recommended={recommended} />
      <About />
      <Banner />
      <NewsList />
      <Partners />
    </div>
  );
};

export default MainPage;
