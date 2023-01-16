import ProfilePicture from "./components/ProfilePicture";
import Contact from "./components/Contact";
import About from "./components/About";
import Interests from "./components/Interests";
import SocialMedias from "./components/SocialMedias";

export default function App() {
    return (
        <div className="business-card">
            <ProfilePicture />
            <Contact />
            <About />
            <Interests />
            <SocialMedias />
        </div>
    );
}
