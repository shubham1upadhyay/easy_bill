import React from "react";
import LeftNavbar from "./LeftNavbar";
import "../styles/RecentBill.css";
import Navbar from "./Navbar";

const RecentBill = ()=>{

    return(
        <>
        <Navbar />

        <LeftNavbar />
        
        <div class="main-content">


<div class="container-fluid mt-5 d-flex searchBox">
  <input type="text" class="form-control" id="searchName" placeholder="Search bill" />
</div>
  
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Invoice Number</th>
          <th scope="col">Name</th>
          <th scope="col">Mobile Number</th>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Action</th>
          
        </tr>
      </thead>
    </table>
  </div>

</div>
        </>

    )
}

export default RecentBill;