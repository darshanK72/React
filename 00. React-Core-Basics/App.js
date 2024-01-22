const root = ReactDOM.createRoot(document.getElementById("root"));
const H1 = React.createElement("h1", { className: "red" }, "This is element created using react");

// const DivEle = (
//     <div className="red">
//         <p>
//             thid is div paragraph
//         </p>
//     </div>
// )

console.log(React);
console.log(ReactDOM);
// console.log(ReactDOMServer.renderToString(H1));

root.render(H1);