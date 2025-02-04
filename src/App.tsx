import React from "react";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { store, persistor } from "./store/index";


import Home from './pages/Home'
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}


export default App
