import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", { id: "heading" }, "Hello reactjs");

const heading = (
  <h1 id="heading" className="head" tabIndex="1">
    This is JSX code syntax
  </h1>
);

console.log(heading);
//console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
