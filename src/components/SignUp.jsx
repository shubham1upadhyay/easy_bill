import React, { useState } from "react";
import logo from "../Resources/easy-bill-logo.png";
import "../styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    sellerName: '',
    sellerEmail: '',
    sellerPassword: '',
    rePassword:'',
    businessName: '',
    businessAddress: '',
    sellerContactNumber: '',
    gst: '',
  });

  const [errors, setErrors] = useState({});
  const [signingUp, setSigningUp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: value ? '' : 'This field is required'
    });
  };

  const handleSave = () => {
    const newErrors = {};
    Object.keys(userData).forEach(key => {
      if (!userData[key]) {
        newErrors[key] = 'This field is required';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    localStorage.setItem('userData', JSON.stringify(userData));
    setSigningUp(true);
        
      setTimeout(() => {
        setSigningUp(false);
        navigate('/homepage');
      }, 3000);
  };


  return (
    <div className="signupParent">
      <section class="vh-100">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div
                class="card text-black"
                style={{
                  "border-radius": "25px",
                  "background-color": "rgb(40, 39, 39)",
                }}
              >
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-danger">
                        Sign up
                      </p>
                      <p id="all-error" class="text-danger"></p>
                      <div class="mx-1 mx-md-4 text-white">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="seller-name">
                              Your Name<span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="seller-name"
                              class="form-control"
                              name="sellerName"
                              value={userData.sellerName}
                              onChange={handleChange}
                            />
                            <small>
                            {errors.sellerName && <span style={{ color: 'red' }}>{errors.sellerName}</span>}
                            </small>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="seller-email">
                              Your Email<span class="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              id="seller-email"
                              class="form-control"
                              name="sellerEmail"
                              value={userData.sellerEmail}
                              onChange={handleChange}
                            />
                            <small>
                            {errors.sellerEmail && <span style={{ color: 'red' }}>{errors.sellerEmail}</span>}
                            </small>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="pass">
                              Password<span class="text-danger"> *</span>
                            </label>
                            <input
                              type="password"
                              id="pass"
                              class="form-control"
                              name="sellerPassword"
                              value={userData.sellerPassword}
                              onChange={handleChange}
                            />
                            <small>
                            {errors.sellerPassword && <span style={{ color: 'red' }}>{errors.sellerPassword}</span>}
                            </small>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="re-pass">
                              Confirm password<span class="text-danger">*</span>
                            </label>
                            <input
                              type="password"
                              id="re-pass"
                              class="form-control"
                              name="rePassword"
                              value={userData.rePassword}
                              onChange={handleChange}
                            />
                            <small>
                            {errors.rePassword && <span style={{ color: 'red' }}>{errors.rePassword}</span>}
                            </small>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            title="input"
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="check-terms"
                            required
                          />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            class="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            id="proceed"
                          >
                            Proceed
                          </button>
                          <Link
                            to="/login"
                            class="btn btn-warning mx-2"
                          >
                            Log in
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src={logo} class="img-fluid" alt="Sample" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div
          class="modal fade bg-dark"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog bg-dark">
            <div class="modal-content bg-dark">
              <div class="modal-header bg-dark">
                <h5
                  class="modal-title text-danger fw-bolder"
                  id="staticBackdropLabel"
                >
                  Business Information
                </h5>
                <button
                  type="button"
                  class="btn-close text-danger bg-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body bg-dark text-white fw-bolder">
                <form class="modalForm bg-dark" action="">
                  {/* <label class="form-label" for="seller-name">Seller Name</label>
                <input class="form-control" type="text" id="seller-name" name="seller-name" />  */}

                  <label class="form-label" for="business-name">
                    Business Name
                    <span id="b-name-error" class="text-danger"></span>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    id="business-name"
                    name="businessName"
                    value={userData.businessName}
                    onChange={handleChange}
                  />
                  <small>
                  {errors.businessName && <span style={{ color: 'red' }}>{errors.businessName}</span>}
                  </small><br/>

                  <label class="form-label" for="business-address">
                    Business Address
                    <span id="b-add-error" class="text-danger"></span>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    id="business-address"
                    name="businessAddress"
                              value={userData.businessAddress}
                              onChange={handleChange}
                            />
                            <small>
                            {errors.businessAddress && <span style={{ color: 'red' }}>{errors.businessAddress}</span>}
                            </small><br/>

                  <label class="form-label" for="gst">
                    GST<span id="b-gst-error" class="text-danger"></span>
                  </label>
                  <input class="form-control" type="text" id="gst" name="gst"
                              value={userData.gst}
                              onChange={handleChange}
                            />
                            <small>
                            {errors.gst && <span style={{ color: 'red' }}>{errors.gst}</span>}
                            </small><br/>

                  <label class="form-label" for="business-contact-number">
                    Contact Number
                    <span id="b-num-error" class="text-danger"></span>
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    id="business-contact-number"
                    name="sellerContactNumber"
                    value={userData.sellerContactNumber}
                    onChange={handleChange}
                  />
                  <small>
                  {errors.sellerContactNumber && <span style={{ color: 'red' }}>{errors.sellerContactNumber}</span>}
                  </small><br/>
                </form>

                
              </div>
              <div class="m-2 p-2 text-center bg-dark">
                <button type="button" class="btn btn-success" id="register"  data-bs-dismiss="modal"
                  aria-label="Close" onClick={handleSave}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {signingUp && <div className="blurred-background"></div>}
      {signingUp && (
        <div className="centered-message">
          <p>Signing up...</p>
        </div>
      )}
    </div>
  );
};

export default SignUp;
