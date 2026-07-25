import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx'
import Nav from './Nav.jsx'
import Dashboard from './Dashboard.jsx'
export default function App(){
  return <>
  <Nav></Nav>
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}>
        <Route path="" element={<>Dashboard Index page</>}></Route>
        <Route path="payment" element={<>Payments page</>}></Route>
        <Route path="profile" element={<>Profile page</>}></Route>
        <Route path="settings" element={<>Settings page</>}></Route>
      
      </Route>
    </Routes>
  </BrowserRouter>
  
  </>
}


// /dashboard
// /dashboard/main
// /dashboard/courses
// /dashboard/profile
// /dashboard/payment.