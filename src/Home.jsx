import AboutMe from "components/AboutMe";
import BackToTop from "components/BackToTop/index";
import Footer from "components/Footer";
import NavBar from "components/Navbar/index";
import Projects from "components/Projects";

export default function Home() {
    return (
        <div>
            <NavBar />
            <AboutMe />
            <Projects />
            <Footer />
            <BackToTop />
        </div>
    )
}