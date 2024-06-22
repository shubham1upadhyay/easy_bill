import React, { useEffect, useRef, useState } from "react";
import "../styles/CreateBillPage.css";
import LeftNavbar from "./LeftNavbar";
import Navbar from "./Navbar";

const CreateBillPage = ()=>{

  const [rows, setRows] = useState([]);
  const tableBodyRef = useRef(null);

  
    const addRow = () => {
      const newRow = Array(8).fill(""); 
      // setRows([...rows, newRow]);
      setRows((prevRows) => [...prevRows, newRow]);
    };

    useEffect(() => {
      if (tableBodyRef.current) {
        tableBodyRef.current.scrollTop = 0; // Scroll the table body to the top
      }
    }, [rows]);

    const generateBill = () => {
      // Logic for downloading data
      alert("Downloading data...");
    };

    return (
        <>
        <Navbar />
        <LeftNavbar />
        
        <div class="main-content">
    <div class="container">

           {/* <!-- create bill page --> */}
        <div class="container-fluid create-bill-page-details" id="create-bill-page">

            <div class="my-card">
                <h6 class="text-primary fw-bolder" style={{"margin-left": "20px;"}}>Customer Details</h6>
                <div class="text-danger">

                  <form>
                  <div class="row mb-3">
    <label for="customerName" class="col-sm-2 col-form-label">Customer Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="customerName"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputnumber" class="col-sm-2 col-form-label">Customer Number</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputnumber" />
    </div>
  </div>
                  </form>

                        <hr/>
                  </div>
                </div>

                 {/* <!-- product details --> */}
          <div class="prouct-details">
            <h6 class="text-primary fw-bolder">Product Details</h6>
            <table className="responsive-table">
            <thead>
          <tr style={{"text-align": "right"}}>
                    <th colspan="8" id="product-add-btn">
                      <button class="btn btn-sn btn-info add-btn" onClick={addRow}>Add Items</button>
                    </th>
                  </tr>
            <tr className="tableHeader">
              {Array.from({ length: 8 }, (_, index) => (
                <th key={index}>Header {index + 1}</th>
              ))}
            </tr>
          </thead>
            </table>
            <hr />

            <div className="table-container">
        <table className="responsive-table">
         
        <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>Cell {rowIndex + 1}-{cellIndex + 1}</td>
                  ))}
                </tr>
              ))}
              {rows.length > 0 && (
                <tr>
                  <td colSpan={8} className="text-center">
                    <button onClick={generateBill} className="download-btn btn btn-success">Generate Bill</button>
                  </td>
                </tr>
              )}
            </tbody>


        </table>
      </div>
          </div>


        </div>

    </div>
    </div>
        </>

    )

}

export default CreateBillPage;