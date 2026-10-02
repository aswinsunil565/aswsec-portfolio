import Background from "./components/Background";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Terminal from "./components/Terminal";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";
export default function App() {
  const isResume = window.location.pathname.replace(/\/$/, "") === "/resume";
  return (
    <>
      <div className="noise" /><Background /><CursorGlow /><Navbar base={isResume ? "/" : ""} />
      {isResume ? <Resume /> : (
        <main>
          <Hero /><About /><Education /><Skills /><Terminal /><Projects /><Contact />
        </main>
      )}
      <footer><span>© {isResume ? new Date().getFullYear() + " " : ""}ASWIN CS</span><span>Built with curiosity &amp; code.</span></footer>
    </>
  );
}
