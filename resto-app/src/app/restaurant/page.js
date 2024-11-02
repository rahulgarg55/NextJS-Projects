"use client";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";
import { useState } from "react";
const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
    <div className="container">
      <h1>Restaurant Login/SignUp Page</h1>
      {login ? <RestaurantLogin /> : <RestaurantSignUp />}
      <div>
        <button className="button-link" onClick={() => setLogin(!login)}>
          {login ? "Don't Have an Account? SignUp" : "Already have an account?"}
        </button>
      </div>
      </div>
    </>
  );
};

export default Restaurant;
