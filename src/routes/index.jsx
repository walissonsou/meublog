import {
  Route,
  BrowserRouter,
  Routes, 
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import NavBar from '../components/NavBar'
import About from '../pages/About'
import Books from '../pages/Books'
import Footer from '../components/Footer'
export default function AplicationRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home/>}/>   
      <Route path="/" element={<h1>HOME</h1>}/>  
      <Route path="/contato" element={<h1>contato</h1>}/> 
      <Route path="/livros" element={<Books/>}/> 
      <Route path="/sobre" element={<About />}/>    
        
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}
