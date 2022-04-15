import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

function Component({ defaultNumber }) {
  const [showHidebackground, setShowhide] = useState(false);
  const toggle = (e) => {
    setShowhide(!showHidebackground);
  };
  return (
    <div className="container">
      <div
        style={
          showHidebackground
            ? {
                width: "100px",
                height: "100px",
                color: "black",
                fontSize: "18px",
                backgroundColor: " #FFFFFF",
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)",
                  borderRadius:'50%'
              }
            : { display: "none" }
        }
      >
        Hello các bạn{" "}
      </div>
      <button onClick={toggle}>show/hide</button>
    </div>
  );
}

export default Component;
