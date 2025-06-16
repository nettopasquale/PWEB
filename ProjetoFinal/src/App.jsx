import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Component } from "react"; 
import Home from "./pages/Home/Home";


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
      </>
    );
    
  }
}

export default App;
