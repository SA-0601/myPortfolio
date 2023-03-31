import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
// import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/experience" element={<Experience />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
