import About from "./components/About/About";
import Education from "./components/Education/Education";
import Languages from "./components/Languages/Languages";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="relative">
      <Topbar />
      <About />
      <Education />
      <Skills />
      <Languages />
      <Projects />
    </div>
  );
}

export default App;
