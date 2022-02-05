import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/Products/ProductDetails";
import AllProducts from "./components/Products/AllProducts";
import { useState } from "react";
import Data from "./Data";
import Search from "./components/Products/Search";
import SigleProduct from "./components/Products/SigleProduct";
import LoginSignUp from "./components/Users/LoginSignUp";
import UserOptions from "./components/Users/UserOptions";
import Dashboard from "./components/Admin/Dashboard.js";
import { ReactNotifications } from "react-notifications-component";
import Tables from "./components/Admin/Tables/Tables";
import Billing from "./components/Admin/Billing/Billing";

function App() {
  const [selectedOption, setSelectedOption] = useState(Data.fetchProducts);
  return (
    <BrowserRouter>
      <div className="app">
        <ReactNotifications />
        <Navbar setSelectedOption={setSelectedOption} />
        <UserOptions />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route
            exact
            path="/products"
            element={<AllProducts selectedOption={selectedOption} />}
          />
          <Route path="/search" exact element={<Search />} />
          <Route exact path="/products/:id" element={<SigleProduct />} />
          <Route path="/login" exact element={<LoginSignUp />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/dashboard/tables" exact element={<Tables />} />
          <Route path="/dashboard/billing" exact element={<Billing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
