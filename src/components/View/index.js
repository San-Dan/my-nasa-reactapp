import React from "react";

const View = props => (
  <div
    {...props}
    style={{
      // maxWidth: "1000px",
      margin: "0 auto",
      width: "100vw"
    }}
  >
    {props.children}
  </div>
);

export default View;