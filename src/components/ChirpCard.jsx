import React from "react";

let ChirpCard = ({ chirp }) => {
  return (
      <div className="chirp">
        <h1>{chirp.username}</h1>
        <h3>{chirp.msg}</h3>
        <p>{chirp.timestamp}</p>
      </div>
  );
};

export default ChirpCard;
