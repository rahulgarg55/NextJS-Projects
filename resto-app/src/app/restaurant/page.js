'use client'
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";
import { useState } from "react";   
const Restaurant = ()=>{
    const [login,setLogin] = useState(true);  
    return (
        <>
        <h1>Restaurant Login/SignUp Page</h1>
        {
           login?<RestaurantLogin/>: <RestaurantSignUp/>
        }
       <button onClick={()=>setLogin(!login)}>
        {login?"Don't Have an Account? SignUp":"Already have an account?"   }
       </button>  
        </>
    )
}

export default Restaurant;