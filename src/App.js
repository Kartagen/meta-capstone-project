import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import {Route, Routes} from "react-router";

function App() {
  return (
    <>
      <Header>

      </Header>
      <main>
          <Routes>
              <Route path="/"element={}></Route>
          </Routes>
      </main>
      <Footer>

      </Footer>
    </>
  );
}

export default App;
