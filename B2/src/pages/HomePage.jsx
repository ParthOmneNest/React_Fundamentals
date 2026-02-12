import { NavBar } from "../components/layout/Navbar"
import { FeaturesSection } from "../components/layout/FeaturesSection"
import { Footer } from "../components/layout/Footer"
import { HeroSection } from "../components/layout/HeroSection"

export const HomePage=()=>{
    return(
        <>
            <NavBar/>
            <main>
                <HeroSection/>
                <FeaturesSection/>
            </main>
            <Footer/>
        </>
    )
}