import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Header from './components/Header';
import Services from "./components/Services"
import Project from "./components/Project"
import Testimonial from "./components/Testimonial"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {
  return (
    <>
     <Navbar />
     <Header />
     <About />
     <Services />
     <Project />
     <Testimonial />
     <Blog />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
