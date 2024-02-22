import React, { useEffect, useState } from "react";
import "./App.css";
import FeedPage from "./pages/FeedPage/FeedPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import QnAPage from "./pages/QnAPage/QnAPage";
import MyPage from "./pages/MyPage/MyPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Routes>
      <Route index element={<LoginPage />}></Route>
      <Route path="/signUp" element={<SignUpPage />}></Route>
      <Route
        path="/myPage"
        element={<MyPage toggleTheme={toggleTheme} currentTheme={theme} />}
      ></Route>
      <Route path="/dailyPage" element={<QnAPage />}></Route>
      <Route path="/friendsPage" element={<FriendsPage />}></Route>
      <Route path="/feedPage" element={<FeedPage />}></Route>
    </Routes>
  );
}

export default App;
