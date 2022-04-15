import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";


function Component(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showpassword, setshowpassword]=useState(false)
    
    const handleChangeUsername = (e) => {
        const value=e.target.value
        setUsername(value);
    };
    const handleChangePassword = (e) => {
      const value = e.target.value;
      setPassword(value);
    };

   const handleOnclick = (e) => {
       console.log({ username, password });
   };

   const togglePassword = (e) => {
       setshowpassword(!showpassword);
       console.log(showpassword);
   };

  return (
    <div className="container">
      <div>
        <input
          style={{
            margin: "15px 12px",
            padding: "4px",
          }}
          type="text"
          placeholder="username"
          value={username}
          onChange={handleChangeUsername}
        />
      </div>
      <div>
        <input
          style={{
            margin: "15px 12px",
            padding: "4px",
          }}
          type={showpassword === false ? "password" : "text"}
          placeholder="password"
          value={password}
          onChange={handleChangePassword}
        />
        <br />
        <button
          style={{
            margin: "1px 12px",
            padding: "4px",
          }}
          type="checkbox"
          onClick={togglePassword}
        >
          show
        </button>
      </div>
      <div>
        <button
          style={{
            margin: "1px 12px",
            padding: "4px",
          }}
          onClick={handleOnclick}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Component;
