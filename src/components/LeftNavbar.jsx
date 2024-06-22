import React, {useState } from "react";
import "../styles/LeftNavbar.css";
import { Link, useNavigate } from "react-router-dom";

const LeftNavbar = ()=>{

  const [isRedBackground1, setIsRedBackground1] = useState(false);
  const [isRedBackground2, setIsRedBackground2] = useState(false);
  const [isRedBackground3, setIsRedBackground3] = useState(false);
  const [isRedBackground4, setIsRedBackground4] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  // const [isCollapsed, setIsCollapsed] = useState(false);

  const navigate = useNavigate();

  const handleClick1 = (event) => {
    event.stopPropagation();
    setIsRedBackground1(true);
  };
  const handleClick2 = (event) => {
    event.stopPropagation();
    setIsRedBackground2(true);
  };
  const handleClick3 = (event) => {
    event.stopPropagation();
    setIsRedBackground3(true);
  };
  const handleClick4 = (event) => {
    event.stopPropagation();
    setIsRedBackground4(true);
  };

  const handleLogout = () => {
    setLoggingOut(true);  
    setTimeout(() => {
      setLoggingOut(false);
      navigate('/login')
    }, 2000);  
  };
 

    return (
        <>
         <>
<div className='mYnavbar' id="navbar">
       
    <ul>
        <li> <Link to='/user-details'><button
            type="button"
            class="user-details-btn"
            id="user-details-btn"
            onClick={handleClick1}
            style={{
              backgroundColor: isRedBackground1 ? 'red' : ' rgb(34, 17, 17)',
            }}
          >
            User Details 
          </button></Link></li>

        <li><Link to='/create-bill'><button
            type="button"
            class="create-bill-btn"
            id="create-bill-btn"
            onClick={handleClick2}
            style={{
              backgroundColor: isRedBackground2 ? 'red' : ' rgb(34, 17, 17)',
            }}
           
          >
            Create Bill
          </button></Link></li>

        <li> <Link to='/inventory'><button
            type="button"
            class="create-bill-btn"
            id="product-details-btn"
            onClick={handleClick3}
            style={{
              backgroundColor: isRedBackground3 ? 'red' : ' rgb(34, 17, 17)',
            }}
          >
           Product Management
          </button></Link></li>

        <li><Link to='/recent-bill'><button
            type="button"
            class="create-bill-btn"
            id="history-bill-btn"
            onClick={handleClick4}
            style={{
              backgroundColor: isRedBackground4 ? 'red' : ' rgb(34, 17, 17)',
            }}
          >
            Recent Bills
          </button></Link></li>

        {/* <!-- <li><a href="#">Contact</a></li> --> */}
    
      <li> <button type="button" class="create-bill-btn" id="logoutBtn" onClick={handleLogout}>
        Logout 
      </button></li>

    </ul>

</div>
        </>
        {loggingOut && <div className="blurred-background"></div>}
      {loggingOut && (
        <div className="centered-message">
          <p>Logging out...</p>
        </div>
      )}
        </>
    )
}

export default LeftNavbar;