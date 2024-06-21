import CategoryList from "@/app/components/CategoryList/CategoryList";
import About from "@/parts/AboutCompany/About";
import Advantages from "@/parts/Advantages/Advantages";
import Banner from "@/parts/Banner/Banner";
import NewsList from "@/parts/NewsList/NewsList";
import ProductList from "@/parts/ProductList/ProductList";
import Slider from "@/parts/Slider/Slider";

const MainPage = () => {
  return (
    <div>
      <Slider />
      <section className="container mt">
        <ProductList />
      </section>
      <About />
      {/* <CategoryList /> */}
      <Advantages />
      <Banner />
      <NewsList />
    </div>
  );
};

export default MainPage;
