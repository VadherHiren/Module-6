import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Deals from './Deals.js';
import About from './About.js';
import Shop from './Shop.js';
import Venders from './Venders.js';
import Megamenu from './Megamenu.js';
import Blog from './Blog.js';
import Pages from './Pages.js';
import Contact from './Contact.js';
import "react-alice-carousel/lib/alice-carousel.css";
// import "react-alice-carousel/lib/scss/alice-carousel.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/deals' element={<Deals/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/venders' element={<Venders/>}></Route>
        <Route path='/megamenu' element={<Megamenu/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/pages' element={<Pages/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
