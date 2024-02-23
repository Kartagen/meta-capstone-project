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
              <Route path="/meta-capstone-project/" element={<Home/>}/>
              <Route path="/meta-capstone-project/booking" element={<BookingPage/>}/>
              <Route path="/meta-capstone-project/booking/confirm" element={<BookingConfirm/>}/>
              <Route path="/meta-capstone-project/order" element={<WorkingOnIt/>}/>
              <Route path="/meta-capstone-project/about" element={<WorkingOnIt/>}/>
              <Route path="/meta-capstone-project/menu" element={<WorkingOnIt/>}/>
              <Route path="/meta-capstone-project/login" element={<WorkingOnIt/>}/>
              <Route path="/meta-capstone-project/*" element={<WorkingOnIt/>}/>
          </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
