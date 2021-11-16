import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Weekly from "./pages/Weekly"
import Weeklybattle from "./pages/Weeklybattle"
import Popular from "./pages/Popular"
import Popularbattle from "./pages/Popularbattle"
import Favorites from "./pages/Favorites"
import Notfound from "./pages/NotFound"
import Card from "./components/Card"
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Weekly">Weekly</Link></li>
            <li><Link to="/Weekly-battle">Weekly-battle</Link></li>
            <li><Link to="/Popular">Popular</Link></li>
            <li><Link to="/Popular-battle">Popular-battle</Link></li>
            <li><Link to="/Favorites">Favorites</Link></li>
            
            
          </ul>
        </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Weekly/" component={Weekly}/>
        <Route path="/Weekly-battle" component={Weeklybattle}/>
        <Route path="/Popular" component={Popular} />
        <Route exact path="/Popular-battle/" component={Popularbattle}/>
        <Route path="/Favorites/" component={Favorites}/>
        <Route path="/Card/" component={Card}/>
        <Route path="*" component={Notfound}/>
      </Switch>
      </div>
      </BrowserRouter>
    )
  }
}