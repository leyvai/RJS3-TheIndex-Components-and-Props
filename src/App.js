import React from "react";
import authors from "./data";
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorCard from "./AuthorCard";

function App() {
  return (
    <div id="app" className="container-fluid">
      <Sidebar />
      <div className="row">
        <div className="col-2" />
        <div className="content col-10">
          <AuthorList authors={authors} />
        </div>
      </div>
    </div>
  );
}

export default App;
