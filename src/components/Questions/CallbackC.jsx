// import React from "react";

export const CallbackC = ({ data, addData }) => {
  return (
    <div>
      {data.map((d, index) => {
        return <p key={index}>{d}</p>;
      })}
      <button onClick={addData}>Add new Data</button>
    </div>
  );
};
