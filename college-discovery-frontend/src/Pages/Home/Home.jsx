import MainLayout from "../../layouts/MainLayout";
import Hero from "../../Components/hero/Hero";
import Stats from "../Home/Stats";
import FeaturedColleges from "../Colleges/FeaturedColleges";
import PopularCourses from "../Home/PopularCourses";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Stats />
      <WhyChooseUs/>
      <FeaturedColleges />
      <PopularCourses />
    </MainLayout>
  );
};

export default Home;