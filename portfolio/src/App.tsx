import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Extras from "./components/Extras";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
