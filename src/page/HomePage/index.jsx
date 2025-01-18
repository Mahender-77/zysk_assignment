import BodyContent from "../../components/Body"
import { CompaniesContainer } from "../../components/CompaniesContainer"
import { FeaturesContainer } from "../../components/FeaturesContainer"
import Navbar from "../../components/Navbar"



export const HomePage = () => {
    return (
        <>
        <Navbar/>
        <BodyContent/>
        <CompaniesContainer/>
        <FeaturesContainer/>
        </>
    )
}