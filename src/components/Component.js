import React, { useState } from "react";
function Component() {
    const [emoji,setemoji] = useState(0)
  const onclick = () => {
     setemoji(emoji+1);
  };
  return (
    <div className="container">
      <div onClick={onclick}>🥰 {emoji} </div>
    </div>
  );
}

export default Component;
