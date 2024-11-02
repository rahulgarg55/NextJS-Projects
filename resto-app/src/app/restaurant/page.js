"use client";
import RestaurantHeader from "../_components/RestaurantHeader";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import Footer from "../_components/Footer";
import "./style.css";
import { useState } from "react";
const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
    <div className="container">
        <RestaurantHeader />
      <h1>Restaurant Login/SignUp Page</h1>
      {login ? <RestaurantLogin /> : <RestaurantSignUp />}
      <div>
        <button className="button-link" onClick={() => setLogin(!login)}>
          {login ? "Don't Have an Account? SignUp" : "Already have an account?"}
        </button>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurant;
