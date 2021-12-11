import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// CHACKRA UI
import { ChakraProvider } from "@chakra-ui/react";
// PAGES
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/game/:id" exact component={Game}>
            <Game />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
