'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../restaurant/style.css";
const RestaurantSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");

  const router = useRouter();
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setPasswordError(true);
    }
    return false;
    console.log("email", email);
    console.log("password", password);
    console.log("confirmPassword", confirmPassword);
    console.log("name", name);
    console.log("address", address);
    console.log("contact", contact);
    console.log("city", city);

    let response = await fetch("http://localhost:3001/api/restaurant", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        name,
        address,
        contact,
        city,
      }),
    });
    response = await response.json();
    console.log("response", response);
    if (response.success) {
      console.log(response);
      const { result } = response;
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
    }
  };
  return (
    <>
      <h3> SignUp</h3>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter email id"
          className="input-field"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Enter password"
          className="input-field"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError && (
          <span className="input-error">
            Password and Confirm Password not match
          </span>
        )}
      </div>
      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Confirm password"
          className="input-field"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        {passwordError && (
          <span className="input-error">
            Password and Confirm Password not match
          </span>
        )}
      </div>
      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Enter Restaurant Name"
          className="input-field"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Enter City "
          className="input-field"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Enter Full Address"
          className="input-field"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Enter Contact Number"
          className="input-field"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <button onClick={handleSignup} className="input-field">
          Sign Up
        </button>
      </div>
    </>
  );
};
export default RestaurantSignUp;
