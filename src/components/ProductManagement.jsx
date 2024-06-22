import React, { useState, useEffect } from "react";
import "../styles/ProductManagement.css";
import LeftNavbar from "./LeftNavbar";
import Navbar from "./Navbar";

const ProductManagement = () => {
  const initialProductFormState = {
    productName: "",
    productQuantity: "",
    productPrice: "",
    sellingPrice: "",
    costPrice: "",
    tax: "",
  };

  const [productForm, setProductForm] = useState(initialProductFormState);
  const [errors, setErrors] = useState({});
  const [savedProducts, setSavedProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(-1); 
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setSavedProducts(storedProducts);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProductForm({ ...productForm, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!productForm.productName)
      newErrors.productName = "Product Name is required";
    if (!productForm.productQuantity)
      newErrors.productQuantity = "Quantity is required";
    if (!productForm.productPrice)
      newErrors.productPrice = "MRP is required";
    if (!productForm.sellingPrice)
      newErrors.sellingPrice = "Selling Price is required";
    if (!productForm.costPrice)
      newErrors.costPrice = "Cost Price is required";
    if (!productForm.tax)
      newErrors.tax = "Tax is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addProduct = () => {
    if (validateForm()) {
      const updatedProducts = [...savedProducts, productForm];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setSavedProducts(updatedProducts);
      setProductForm(initialProductFormState);
    }
  };

  const deleteProduct = (index) => {
    const updatedProducts = [...savedProducts];
    updatedProducts.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setSavedProducts(updatedProducts);
  };

  const handleEditIndexChange = (index) => {
    setEditIndex(index);
    setProductForm(savedProducts[index]);
  };

  const handleSave = () => {
    const updatedProducts = [...savedProducts];
    updatedProducts[editIndex] = productForm;

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setSavedProducts(updatedProducts);

    setEditIndex(-1);
    setProductForm(initialProductFormState);

    alert("Product updated successfully!");
  };

  const handleCancel = () => {
    setEditIndex(-1);
    setProductForm(initialProductFormState);
  };
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = savedProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
      <Navbar />
      <LeftNavbar />

      <div className="main-content">
        <div className="container-fluid mt-5 searchBox">
          <input
            type="text"
            className="form-control"
            id="searchProduct"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search product"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary addProductBtn"
          data-bs-toggle="modal"
          data-bs-target="#addProduct"
        >
          Add Product
        </button>

        <div className="container-fluid">
          <div id="productForm">
            <div
              className="modal fade"
              id="addProduct"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <label htmlFor="productName" className="form-label">
                      Product Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      value={productForm.productName}
                      onChange={handleInputChange}
                      disabled={editIndex !== -1}
                      placeholder="Product Name"
                    />
                    {errors.productName && (
                      <div className="text-danger">{errors.productName}</div>
                    )}
                    <label htmlFor="productQuantity" className="form-label">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="productQuantity"
                      value={productForm.productQuantity}
                      onChange={handleInputChange}
                      disabled={editIndex !== -1}
                      placeholder="Quantity"
                    />
                    {errors.productQuantity && (
                      <div className="text-danger">
                        {errors.productQuantity}
                      </div>
                    )}
                    <label htmlFor="productPrice" className="form-label">
                      MRP:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="productPrice"
                      value={productForm.productPrice}
                      onChange={handleInputChange}
                      disabled={editIndex !== -1}
                      placeholder="Amount"
                    />
                    {errors.productPrice && (
                      <div className="text-danger">{errors.productPrice}</div>
                    )}

                    <label htmlFor="sellingPrice" className="form-label">
                      Selling Price:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="sellingPrice"
                      value={productForm.sellingPrice}
                      onChange={handleInputChange}
                      disabled={editIndex !== -1}
                      placeholder="Selling Price"
                    />
                    {errors.sellingPrice && (
                      <div className="text-danger">{errors.sellingPrice}</div>
                    )}

                    <label htmlFor="costPrice" className="form-label">
                      Cost Price:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="costPrice"
                      value={productForm.costPrice}
                      onChange={handleInputChange}
                      disabled={editIndex !== -1}
                      placeholder="Cost Price"
                    />
                    {errors.costPrice && (
                      <div className="text-danger">{errors.costPrice}</div>
                    )}

                    <label htmlFor="tax" className="form-label">
                      Tax(%):
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="tax"
                      value={productForm.tax}
                      onChange={handleInputChange}
                      disabled={editIndex !== -1}
                      placeholder="Tax"
                    />
                    {errors.tax && (
                      <div className="text-danger">{errors.tax}</div>
                    )}
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={handleCancel}   
                    >
                      Close
                    </button>
                    {editIndex === -1 ? (
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={addProduct}
                      >
                        Add
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>MRP</th>
                <th>Selling Price</th>
                <th>Cost Price</th>
                <th>Tax(%)</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
            {filteredProducts.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        className="form-control"
                        value={productForm.productName}
                        onChange={handleInputChange}
                        disabled={editIndex === -1}
                      />
                    ) : (
                      product.productName
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="number"
                        className="form-control"
                        value={productForm.productQuantity}
                        onChange={handleInputChange}
                        disabled={editIndex === -1}
                      />
                    ) : (
                      product.productQuantity
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="number"
                        className="form-control"
                        value={productForm.productPrice}
                        onChange={handleInputChange}
                        disabled={editIndex === -1}
                      />
                    ) : (
                      product.productPrice
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="number"
                        className="form-control"
                        value={productForm.sellingPrice}
                        onChange={handleInputChange}
                        disabled={editIndex === -1}
                      />
                    ) : (
                      product.sellingPrice
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="number"
                        className="form-control"
                        value={productForm.costPrice}
                        onChange={handleInputChange}
                        disabled={editIndex === -1}
                      />
                    ) : (
                      product.costPrice
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="number"
                        className="form-control"
                        value={productForm.tax}
                        onChange={handleInputChange}
                        disabled={editIndex === -1}
                      />
                    ) : (
                      product.tax
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <div>
                        <button
                          type="button"
                          className="btn btn-success btn-sm"
                          onClick={handleSave}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm ms-1"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEditIndexChange(index)}
                      >
                        Edit
                      </button>
                    )}
                    {editIndex !== index && (
                      <button
                        type="button"
                        className="btn btn-danger btn-sm ms-1"
                        onClick={() => deleteProduct(index)}
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        ) : (
            <div className="text-center">
              <h5 className="text-danger">No product found !</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductManagement;
