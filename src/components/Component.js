import React from "react";
const arrJobs = [
  { id: "job1", title: "php", quantity: 2 },
  { id: "job2", title: "php", quantity: 122 },
  { id: "job3", title: "php", quantity: 121 },
  { id: "job4", title: "php", quantity: 12 },
  { id: "job5", title: "php", quantity: 82 },
];

function Component(props) {
  return <div className="container">
      <ol>
          {arrJobs.map((item,index)=>{
          return (
            <li key={item.id}>
              id:{item.id}--title:{item.title}--quantity:
              {item.quantity <= 2 ? (
                <span> nhân viên đã đủ </span>
              ) : (
                item.quantity
              )}
            </li>
          );
      })}
      </ol>
      
  </div>;
}

export default Component;
