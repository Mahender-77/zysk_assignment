import { BlogContainer } from "../../components/BlogContainer"
import BodyContent from "../../components/Body"
import { CompaniesContainer } from "../../components/CompaniesContainer"
import { FeaturesContainer } from "../../components/FeaturesContainer"
import Navbar from "../../components/Navbar"
import { ProductMangerBox } from "../../components/ProductMangerBox"
import { QuestionsContainer } from "../../components/QuestionsContainer"



export const HomePage = () => {
    return (
        <>
        <Navbar/>
        <BodyContent/>
        <CompaniesContainer/>
        <FeaturesContainer/>
        <ProductMangerBox/>
        <QuestionsContainer/>
        <BlogContainer/>
        </>
    )
}