import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import WorkingOnIt from "./components/pages/WorkingOnIt/WorkingOnIt";
import BookingPage from "./components/pages/Booking/BookingPage";
import BookingConfirm from "./components/pages/Booking/BookingConfirm";

function App() {
  return (
    <>
      <Header/>
      <main>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/booking" element={<BookingPage/>}/>
              <Route path="/booking/confirm" element={<BookingConfirm/>}/>
              <Route path="/order" element={<WorkingOnIt/>}/>
              <Route path="/about" element={<WorkingOnIt/>}/>
              <Route path="/menu" element={<WorkingOnIt/>}/>
              <Route path="/login" element={<WorkingOnIt/>}/>
              <Route path="*" element={<WorkingOnIt/>}/>
          </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
