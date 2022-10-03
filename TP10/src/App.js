import './css/styles.css';
import './css/bootstrap.min.css'
import Layout from './screens/Layout';
import Home from './screens/Home';
import MoreInfo from './screens/MoreInfo';
import Products from './screens/Products';
import Contact from './screens/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/MoreInfo" element={<MoreInfo/>}></Route>
          <Route path="/Products" element={<Products/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="*" element={<h1 style={{color:"#000"}}>404</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
