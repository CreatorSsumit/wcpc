import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const RenderIframe = () => {
  const [url, setUrl] = useState("/");

  const onChangeUrl = (newUrl) => {
    setUrl(newUrl);
  };

  return (
    <div
      style={{
        width: "auto",
        height: "100vh",
        overflow: "hidden",
        border: "none",
      }}
    >
      <iframe
        style={{ width: "100vw", height: "100vh", border: "none" }}
        src={`https://www.wcpc.us${url}`}
      />
      <App onChangeUrl={onChangeUrl} />
    </div>
  );
};

root.render(
  <React.StrictMode>
    <RenderIframe />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
