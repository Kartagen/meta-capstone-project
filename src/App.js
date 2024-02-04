import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home/Home";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <main>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<Home/>}/>
              <Route path="/booking" element={<Home/>}/>
              <Route path="/booking/confirm" element={<Home/>}/>
              <Route path="/order" element={<Home/>}/>
              <Route path="/menu" element={<Home/>}/>
              <Route path="/login" element={<Home/>}/>
          </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
