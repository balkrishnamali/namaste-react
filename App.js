
const heading = React.createElement("h1", { id: "heading" }, "Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", { id: "childDiv" }, "I am child h1"), React.createElement("h2", { id: "childDiv" }, "I am child h2")]),
React.createElement("div", { id: "child" }, [React.createElement("h1", { id: "childDiv" }, "I am child h1"), React.createElement("h2", { id: "childDiv" }, "I am child h2")])
]);
root.render(parent);
