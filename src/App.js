import "./App.css";
import BlogPage from "./componets/BlogPage";
import Header from "./componets/Header";
import HomePage from "./componets/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/sns" element={<BlogPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
