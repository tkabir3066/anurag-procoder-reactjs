// normal DOM

// const root = document.querySelector("#root");
// const h2 = document.createElement("h2");
// h2.innerText = "Hello js";

// root.append(h2);

//============= react ===============//

const h2 = React.createElement(
  "h2",
  { className: "subHeading" },
  "Hello React"
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(h2);
