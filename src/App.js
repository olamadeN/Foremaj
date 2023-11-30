import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import Homepage from "./components/home";
import Products from "./components/products";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './components/contact';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 130,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>      
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
