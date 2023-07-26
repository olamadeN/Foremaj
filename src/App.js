import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./components/home"
function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Routes>
          <Route index element={<Homepage/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
