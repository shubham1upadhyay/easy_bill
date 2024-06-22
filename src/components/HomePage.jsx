import React from "react";
import "../styles/HomePage.css";
// import { Link } from "react-router-dom";
import LeftNavbar from "./LeftNavbar";
import Navbar from "./Navbar";

const HomePage = ()=>{
    const userData = JSON.parse(localStorage.getItem('userData'));

    return (
        <>
        <Navbar />

      <LeftNavbar />

        <div class="main-content">
      <div class="container">

         {/* <!-- user details page --> */}
         <div class="user-details-page" id="user-details-page">
            <div class="main-card fw-bolder">

                <table style={{"border" : "none"}}>
                    <tr>
                        <td><h5>Seller Name</h5></td>
                        <td><h5  id="seller-name">{userData.sellerName}</h5></td>
                    </tr>
                    <tr>
                        <td><h5>Business Name</h5></td>
                        <td><h5  id="business-name">{userData.businessName}</h5></td>
                    </tr>
                    <tr>
                        <td><h5>Business Address</h5></td>
                        <td><h5 id="business-address">{userData.businessAddress}</h5></td>
                    </tr>
                    <tr>
                        <td><h5>Business GST</h5></td>
                        <td><h5  id="business-gst">{userData.gst}</h5></td>
                    </tr>
                    <tr>
                        <td><h5>Mobile Number</h5></td>
                        <td><h5  id="business-number">{userData.sellerContactNumber}</h5></td>
                    </tr>
                    <tr>
                        <td><h5>Email</h5></td>
                        <td><h5 id="email">{userData.sellerEmail}</h5></td>
                    </tr>
                </table>
            </div>

          </div>

         
       </div>
       </div>

        </>
    )
}
export default HomePage;