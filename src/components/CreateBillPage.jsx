import React, { useEffect, useRef, useState } from "react";
import "../styles/CreateBillPage.css";
import LeftNavbar from "./LeftNavbar";
import Navbar from "./Navbar";

const CreateBillPage = ()=>{

  const [rows, setRows] = useState([]);
  const tableBodyRef = useRef(null);

  
    const addRow = () => {
      const newRow = Array(7).fill(""); 
      // setRows([...rows, newRow]);
      setRows((prevRows) => [...prevRows, newRow]);
    };

    const deleteRow = (index) => {
      setRows((prevRows) => prevRows.filter((_, rowIndex) => rowIndex !== index));
    };

    useEffect(() => {
      if (tableBodyRef.current) {
        tableBodyRef.current.scrollTop = tableBodyRef.current.scrollHeight;
      }
    }, [rows]);

    const generateBill = () => {
      alert("I am working");
    };

    return (
        <>
        <Navbar />
        <LeftNavbar />
        
        <div class="main-content">
    <div class="container">

           {/* <!-- create bill page --> */}
        <div class="container-fluid create-bill">
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
            {/* <table className="responsive-table">
            <thead>
          <tr style={{"text-align": "right"}}>
                    <th colspan="8" id="product-add-btn">
                      <button class="btn btn-sn btn-info add-btn" onClick={addRow}>Add Items</button>
                    </th>
                  </tr>
            <tr className="tableHeader">
                <th>S No.</th>
                <th>Name</th>
                <th>MRP</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Tax($)</th>
                <th>Discount($)</th>
                <th>Amount</th>
            </tr>
          </thead>
            </table> */}

           
        <table className="responsive-table">
        <div className="tableHeaderDiv">
        <thead>
          <tr>
                    <th colspan="8">
                      <button class="btn btn-sn btn-info add-btn" onClick={addRow}>Add Items</button>
                    </th>
                  </tr>
            <tr className="tableHeader">
                <th>S No.</th>
                <th>Name</th>
                <th>MRP</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Tax</th>
                <th>Discount</th>
                <th>Amount</th>
                <th>Action</th>
            </tr>
          </thead>
          </div>
          <div className="table-container">
        <tbody ref={tableBodyRef} className="tableBody">
        {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="productColumn">
                      <td><input type="text" className="form-control" value={rowIndex + 1} readOnly/></td>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>
                          <input type="text" className="form-control" />
                        </td>
                      ))}
                       <td>
                        <button
                        
                          className="btn text-center btn-sm btn-danger"
                          onClick={() => deleteRow(rowIndex)}
                        >
                          X
                        </button>
                      </td>
                </tr>
              ))}
              {rows.length > 0 && (
                <tr>
                  <td colspan={9} className="text-center">
                    <button onClick={generateBill} className="download-btn btn btn-success">Generate Bill</button>
                  </td>
                </tr>
              )}
            </tbody>
</div>

        </table>
      </div>
          </div>


        </div>

    </div>
        </>

    )

}

export default CreateBillPage;