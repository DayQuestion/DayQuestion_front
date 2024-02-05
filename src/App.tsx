import React from "react";
import "./App.css";
import FeedPage from "./pages/FeedPage/FeedPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <FeedPage />
    </BrowserRouter>
  );
}

export default App;
