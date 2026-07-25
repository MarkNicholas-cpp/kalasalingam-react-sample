import { Outlet,useNavigate,useLocation } from "react-router-dom";
export default function Dashboard(){
    const navigate = useNavigate();
    const location = useLocation();
    
    return <>
    Dashboard <br />
    <nav>
        <a href="/">Dashboard</a>
        <a href="/dashboard/payment">Payments</a>
        <a href="/dashboard/profile">Profile</a>
        <a href="/dashboard/settings">Settings</a>
    </nav>
    {/* nested routes will be rendered in the dashboard in the Outlet Tag */}
    <small>{location.pathname}</small>
    <Outlet></Outlet>
    </>
}