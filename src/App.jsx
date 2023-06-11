import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "animate.css";

const App = () => {
  return (
    <>
      <ParallaxProvider>
        <Header />
        <Main />
        <Footer />
      </ParallaxProvider>
    </>
  );
};

export default App;
