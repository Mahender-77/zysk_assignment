import { BlogContainer } from "../../components/BlogContainer";
import BodyContent from "../../components/Body";
import { CompaniesContainer } from "../../components/CompaniesContainer";
import { FeaturesContainer } from "../../components/FeaturesContainer";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { ProductMangerBox } from "../../components/ProductMangerBox";
import { QuestionsContainer } from "../../components/QuestionsContainer";
import { SectionContainer } from "../../components/SectionContainer";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <BodyContent />
      <CompaniesContainer />
      <FeaturesContainer />
      <ProductMangerBox />
      <QuestionsContainer />
      <BlogContainer />
      <SectionContainer />
      <Footer/>
    </>
  );
};
