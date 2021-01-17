import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesList from "./pages/ArticlesList";
// comment
const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles-list" component={ArticlesList} exact />
        <Route path="/article" component={ArticlePage} exact />
      </div>
    </Router>
  );
};

export default App;
