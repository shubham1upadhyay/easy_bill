import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage';
import CreateBillPage from './components/CreateBillPage';
import LoginPage from './components/LoginPage.jsx';
import ProductManagement from './components/ProductManagement';
import RecentBill from './components/RecentBill';
import SignUp from './components/SignUp';
import UserDetails from './components/UserDetails';

import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
  </React.StrictMode>
);

reportWebVitals();
