import React from "react";
import "./App.css";
import FeedPage from "./pages/FeedPage/FeedPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import QnAPage from "./pages/QnAPage/QnAPage";
import MyPage from "./pages/MyPage/MyPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />}></Route>
      <Route path="/signUp" element={<SignUpPage />}></Route>
      <Route path="/myPage" element={<MyPage />}></Route>
      <Route path="/qna" element={<QnAPage />}></Route>
      <Route path="/friends" element={<FriendsPage />}></Route>
      <Route path="/feed" element={<FeedPage />}></Route>
    </Routes>
  );
}

export default App;
