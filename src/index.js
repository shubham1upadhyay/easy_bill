import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage.jsx';
import CreateBillPage from './components/CreateBillPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import ProductManagement from './components/ProductManagement.jsx';
import RecentBill from './components/RecentBill.jsx';
import SignUp from './components/SignUp.jsx';
import UserDetails from './components/UserDetails.jsx';

import reportWebVitals from './reportWebVitals.js';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/recent-bill" element={<RecentBill />} />
        <Route path="/inventory" element={<ProductManagement />} />
        <Route path="/create-bill" element={<CreateBillPage />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
