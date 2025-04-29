import React from "react";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>


        <div>
          <label htmlFor="image">Image</label>
          <input type="file" name="file" id="file" />
        </div>

        <input type="submit" value="Register" />
      </form>
    
    </div>
  );
}

export default Register;
