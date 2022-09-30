import "./lacripta-logo.png";
import './App.css';
import Footer from './assets/Footer/Footer.js';
import NavBar from "./assets/NavBar/NavBar";
import ItemListContainer from "./assets/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./assets/ItemDetailContainer/ItemDetailContainer.jsx";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ErrorRoute from "./assets/ErrorRoute/ErrorRoute";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <header className="App-header">
          <NavBar></NavBar>
        </header>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/detail/:id" element={<ItemDetailContainer/>}></Route> 
        <Route path="*" element={<ErrorRoute/>}></Route>       
      </Routes>
        <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
