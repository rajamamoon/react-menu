import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";
import Seafood from "./Views/Seafood";
import Beef from "./Views/Beef";
import Chicken from "./Views/Chicken";
import Lamb from "./Views/Lamb";
import Dessert from "./Views/Dessert";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/seafood">
              <Seafood />
            </Route>
            <Route path="/beef">
              <Beef />
            </Route>
            <Route path="/chicken">
              <Chicken />
            </Route>
            <Route path="/lamb">
              <Lamb />
            </Route>
            <Route path="/dessert">
              <Dessert />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
