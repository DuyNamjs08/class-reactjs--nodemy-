import React, { useState } from "react";


function Component(props) {
    const[username,setUsername]=useState('')
    const [password, setPassword] = useState('');
    
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


  return (
    <div className="container">
      <div>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={handleChangeUsername}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <div>
        <button onClick={handleOnclick}>Submit</button>
      </div>
    </div>
  );
}

export default Component;
