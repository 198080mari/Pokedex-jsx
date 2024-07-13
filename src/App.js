import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Pokedex from "./pages/Pokedex";
// import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import { ThemeContext } from "./providers/theme";

// const Pokedex = React.lazy(() => import("./pages/Pokedex"));
// const Home = React.lazy(() => import("./pages/Home"));
// const Pokemon = React.lazy(() => import("./pages/Pokemon"));

function App() {
  return (
    <BrowserRouter>
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) =>
         <div style={{ backgroundColor: theme }}>
          <button  title='Trocar o tema' onClick={toggleTheme} style={{ backgroundColor: 'red', height: '100px', width: '100px'}} />
         <Route path="/" exact component={Pokedex} />
         <Route path="/pokedex" exact component={Pokedex} />
         <Route path="/pokemon/:pokemonIndex" exact component={Pokemon} />
       </div>
      }
      </ThemeContext.Consumer>
    </BrowserRouter>
  );
}

export default App;
