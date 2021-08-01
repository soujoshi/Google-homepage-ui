import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/HomeScreen/Footer";
import Post from "./post";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Footer} />
        <Route path="/post" component={Post} />
      </BrowserRouter>
    </>
  );
};

export default App;
