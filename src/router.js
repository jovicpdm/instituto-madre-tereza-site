import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./pages/app";
import App from "./pages/app";
import { CreateNews } from "./pages/app/createNews";
import { News } from "./pages/app/news";

function Router() {
  return (
    <div className="router">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/crtnws" element={<CreateNews />} />
      </Routes>
    </div>
  );
}

export default Router;
