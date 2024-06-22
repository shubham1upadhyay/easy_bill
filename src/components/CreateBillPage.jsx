import React, { useEffect, useRef, useState } from "react";
import "../styles/CreateBillPage.css";
import LeftNavbar from "./LeftNavbar";
import Navbar from "./Navbar";
import logo from "../Resources/easy-bill-logo.png"

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

    const billDetails = JSON.parse(localStorage.getItem("products")) || [];
    const userData = JSON.parse(localStorage.getItem('userData'));

      const todaysDate = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0'); 
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${day}-${month}-${year}`;
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
        <tbody  ref={tableBodyRef} className="tableBody">
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
                    <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="download-btn btn btn-success">Generate Bill</button>
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

    {/* bill page modal will be updated here */}

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-body">

        <div className="billpageLogo">
          <img src={logo} alt="logo" />
        </div>
<hr />
        <div className="billpage_contact_details">
          <div>
            <ul>
              <li>Seller Name   : <span>{userData.sellerName}</span></li>
              <li>Company Name  : <span>{userData.businessName}</span></li>
              <li>Mobile Number : <span>{userData.sellerContactNumber}</span></li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Customer Name   : <span></span></li>
              <li>Customer Mobile : <span></span></li>
              <li>Date: <span className="text-danger">{todaysDate()}</span></li>
            </ul>
          </div>

        </div>
        <hr />


       <div className="billDetails">
        <table className="">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">MRP</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Tax</th>
              <th scope="col">Discount</th>
              <th scope="col">Amount</th>
              </tr>
              </thead>
              <tbody>
                {billDetails.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.productName}</td>
                    <td>{item.productName}</td>
                    <td>{item.productName}</td>
                    <td>{item.productName}</td>
                    <td>{item.productName}</td>
                    <td>{item.productName}</td>
                    <td>{item.productName}</td>
                  </tr>
                ))}

              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                </tr>

                <tr className="no-border">
                  <td colSpan="6"></td>
                  <td>Total Amount :</td>
                  <td className="text-danger fw-bolder">$2500.50</td>
                </tr>

                <tr className="no-border">
                  <td colSpan="6"></td>
                  <td>Total Tax :</td>
                  <td className="text-danger fw-bolder">$2500.50</td>
                </tr>

                <tr className="no-border">
                  <td colSpan="6"></td>
                  <td>Total Discount :</td>
                  <td className="text-danger fw-bolder">$2500.50</td>
                </tr>

                <tr className="no-border">
                  <td colSpan="6"></td>
                  <td>Bill Amount :</td>
                  <td className="text-danger fw-bolder">$2500.50</td>
                </tr>
               
              </tfoot>

        </table>
       </div>



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Print</button>
      </div>
    </div>
  </div>
</div>
        </>

    )

}

export default CreateBillPage;