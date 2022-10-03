import Header from "../components/Header";
import Footer from "../components/Footer"
import { Link, Outlet } from "react-router-dom";


export default function Layout(){
    return(
        <>
            <Header/>
            <div className="container-fluid">
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
   
}