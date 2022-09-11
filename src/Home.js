import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import MyComponent from "./MyComponent";

function Home() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<div>INDEX</div>} />
        <Route path="about" element={<MyComponent />} />
      </Routes>
    </div>
  );
}

export default Home;
