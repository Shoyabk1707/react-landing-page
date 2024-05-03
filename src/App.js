import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Features from "./Components/Features";
import About from "./Components/About";
import Pricing from "./Components/Pricing";
import Newsletter from "./Components/Newsletter";
import Footer from "./shared/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Features/>
      <About/>
      <Pricing/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
