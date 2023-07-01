import './App.css';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar />
    <Homepage />
    <About />
    <Skills />
    <Projects />
    <Achievements />
    <Blogs />
    <Contact />
    </>
  );
}

export default App;
