import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import { getFirestore } from "../../firebase";

// useEffect(() => {
//   setLoading(true);
//   const db = getFirestore();
//   const itemCollection = db.collection("items");
//   itemCollection
//     .get()
//     .then((querySnapshot) => {
//       if (querySnapshot.size === 0) {
//         console.log("No results!");
//       }
//       setItems(querySnapshot.doc.map((doc) => doc.data()));
//     })
//     .catch((error) => {
//       console.log("Error searching items", error);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// }, []);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
