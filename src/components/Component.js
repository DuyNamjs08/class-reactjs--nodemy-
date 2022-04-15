import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";


function Component({defaultNumber}) {

    const [wallet, setwallet] = useState({
        address:'Hà Nam',
        name:'Nam',
        property:1000000
    });
    const increase = (e) => {
       
        setwallet({
          ...wallet,
          property: wallet.property + 1000,
        });
    };
   
    const decrease = (e) => {
      
        setwallet({
          ...wallet,
          property: wallet.property - 10000,
        });
    };
    const handleAlert = (mess) => {
        alert(mess)
    };

  return (
    <div className="container">
      <button onClick={increase}>increase + 1000 </button>
      <h2>Wallet</h2>
      <div>{wallet.address}</div>
      <div>{wallet.name}</div>
      <div>{wallet.property}</div>
      <button onClick={decrease}>decrease - 10000</button>
      <button onClick={(e)=>{handleAlert('chào các bạn ')}}>click me</button>
    </div>
  );
}

export default Component;
