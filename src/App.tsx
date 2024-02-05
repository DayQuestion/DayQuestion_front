import React from "react";
import "./App.css";
import FeedPage from "./pages/FeedPage/FeedPage";
import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";
function App() {
  return (
    <BrowserRouter>
      <Reset />
      <FeedPage />
    </BrowserRouter>
  );
}

export default App;
