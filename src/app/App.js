import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Author from "../components/Author";
import Profile from "../components/Profile";
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        {/* Add Routes here! */}
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
