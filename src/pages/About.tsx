import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Values from "@/components/Values";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="pt-20"> {/* Add padding for fixed header */}
                <AboutSection aboutImage={aboutImage} />
                <Values />
            </div>
            <Footer />
        </div>
    );
};

export default About;
