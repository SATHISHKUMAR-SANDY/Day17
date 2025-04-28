// SimpleComponent.jsx
import React from "react";
import ExtraTask1 from "../Hoc/ExtraTask1"

const Task1 = (props) => {
  return (
    <div>
      <h2>Hello from SimpleComponent!</h2>
      <p>Message from HOC: {props.message}</p>
      <p>Username: {props.username}</p>
    </div>
  );
};

export default ExtraTask1(Task1);
