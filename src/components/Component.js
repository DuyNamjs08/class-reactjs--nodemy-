import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";


function Component({defaultNumber}) {

    const [number, setnumber] = useState(defaultNumber);
    const increase = (e) => {
    //    const newNumber =number +1
        setnumber(number + 1);
    };
   
    const decrease = (e) => {
      const newNumber = number - 1;
      setnumber(newNumber);
    };

  return (
    <div className="container">
      <button onClick={increase}>increase +1 </button>
      <input type="text" value={number}></input>
      <button onClick={decrease}>decrease -1</button>
    </div>
  );
}

export default Component;
