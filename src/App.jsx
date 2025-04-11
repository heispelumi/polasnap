import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Createpolaroid from "./components/Createpolaroid";





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createpolaroid" element={<Createpolaroid />} />
  
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
