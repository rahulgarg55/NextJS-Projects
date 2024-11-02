const RestaurantSignUp = () => {
    return (
      <>
        <h3> SignUp</h3>
        <div className="input-wrapper">
          <input type="text" placeholder="Enter email id" className="input-field" />
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Enter password"className="input-field" />
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Confirm password"className="input-field" />
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Enter Restaurant Name"className="input-field" />
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Enter City "className="input-field" />
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Enter Full Address"className="input-field" />
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Enter Contact Number"className="input-field" />
        </div>
        <divc className="input-wrapper">
          <button className="input-field">Sign Up</button>
        </divc>
      </>
    );
  };
  export default RestaurantSignUp;
  