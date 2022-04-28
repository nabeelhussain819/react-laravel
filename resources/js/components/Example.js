import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CreateCertificate from "./Certificates/Create";
import Create from "./User/Create";
import Index from "./User/Index";
function Example() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/Create" element={<Create />} />
        <Route
          exact
          path="/CreateCertificate"
          element={<CreateCertificate />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Example;

if (document.getElementById("example")) {
  ReactDOM.render(<Example />, document.getElementById("example"));
}
