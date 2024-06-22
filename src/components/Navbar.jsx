import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = ()=>{

    const [pageTitle, setPageTitle] = useState("Easy Bill");

    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
          case "/user-details":
            setPageTitle("User Details");
            break;
          case "/create-bill":
            setPageTitle("Create Bill");
            break;
          case "/inventory":
            setPageTitle("Product Management");
            break;
          case "/recent-bill":
            setPageTitle("Recent Bills");
            break;
          default:
            setPageTitle("Easy Bill");
            break;
        }
      }, [location.pathname]);

    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-danger fixed-top">
        <div class="container-fluid title d-flex justify-content-betweens">
          <h1 class="text-light">{pageTitle}</h1>
          {/* <!-- <button type="button" class="btn btn-primary" id="download-btn">Download</button> --> */}
        </div>
      </nav>
    )
}

export default Navbar;