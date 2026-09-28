import React from "react";

function App() {
  return (
    <div>
      <h1>User Registration</h1>

      <form>
        <input type="text" placeholder="Enter Name" />
        <br /><br />

        <input type="email" placeholder="Enter Email" />
        <br /><br />

        <input type="password" placeholder="Enter Password" />
        <br /><br />

        <input type="password" placeholder="Confirm Password" />
        <br /><br />

        <input type="tel" placeholder="Enter Phone Number" />
        <br /><br />

        <label>
          <input type="radio" name="gender" />
          Male
        </label>

        <label>
          <input type="radio" name="gender" />
          Female
        </label>

        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;