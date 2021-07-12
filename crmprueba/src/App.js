import React from "react";

import Lista from "./components/lista";
import Crear from "./components/Crear";
import Editar from "./components/Editar";

import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (

    <Router>
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
                <Link className="nav-item nav-link active" to={"/"}>Clientes</Link>
                <Link className="nav-item nav-link" to={"/"}>Graficos</Link>
                <Link className="nav-item nav-link" to={"/"}>Proximamente</Link>
            </div>
        </nav>

    <div className="container-fluid">

      <br></br>
      <Route exact path="/" component={Lista}></Route>
      <Route path="/crear" component={Crear}></Route>
      <Route path="/editar/:Id" component={Editar}></Route>

    </div>
    </Router>

  );
}

export default App;
