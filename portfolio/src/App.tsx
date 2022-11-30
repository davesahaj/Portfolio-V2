import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Extras from "./components/Extras";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Education/>
      <Projects />
      <Extras />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
