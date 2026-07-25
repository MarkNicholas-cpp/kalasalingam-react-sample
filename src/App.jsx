import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx'
export default function App(){
  return <>
  This is a App Component;<br />
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>

      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  </BrowserRouter>
  
  </>
}