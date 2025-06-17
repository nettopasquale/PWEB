import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Component } from "react"; 
import Home from "./pages/Home/Home";
import Buscar from "./pages/Buscar/Buscar";
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import Listar from "./pages/Listar/Listar";


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/buscar" element={<Buscar/>}/>
            <Route path="/cadastrar" element={<Cadastrar/>}/>
            <Route path="/listar" element={<Listar/>}/>
          </Routes>
        </Router>
      </>
    );
    
  }
}

export default App;
