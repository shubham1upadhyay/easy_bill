import React from "react";
import "../styles/ProductManagement.css";
import LeftNavbar from "./LeftNavbar";
import Navbar from "./Navbar";

const ProductManagement = () => {
  return (
    <>
        <Navbar />

      <LeftNavbar />

      <div class="main-content">
        <div class="container-fluid mt-5 d-flex searchBox">
          <input
            type="text"
            class="form-control"
            id="searchProduct"
            placeholder="Search product"
          />
        </div>

        <div class="container-fluid">
          <div id="productForm">
            <div
              class="modal fade"
              id="addProduct"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-body">
                    <label for="productName" class="form-label">
                      Product Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="productName"
                      placeholder="Product Name"
                    />
                    <label for="productQuantity" class="form-label">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="productQuantity"
                      placeholder="Quantity"
                    />
                    <label for="productPrice" class="form-label">
                      MRP:
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="productPrice"
                      placeholder="Amount"
                    />

                    <label for="sellingPrice" class="form-label">
                      Selling Price:
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="sellingPrice"
                      placeholder="Selling Price"
                    />

                    <label for="costPrice" class="form-label">
                      Cost Price:
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="costPrice"
                      placeholder="Cost Price"
                    />

                    <label for="tax" class="form-label">
                      Tax(%):
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="tax"
                      placeholder="Tax"
                    />
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-success"
                      onclick="addProduct()"
                    >
                      Add Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <table class="table">
            <thead>
              <th>S.No.</th>
              <th>Name</th>
              <th>MRP</th>
              <th>Cost Price</th>
              <th>Selling Price</th>
              <th>Tax(%)</th>
              <th>Quantity</th>
              <th>Action</th>
            </thead>

            <tbody id="productList"></tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductManagement;
