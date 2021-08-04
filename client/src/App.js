import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home";
import RegistreComp from "./components/registre/RegistreComp";
import LoginUser from "./components/login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetAuth } from "./js/actions";
import NaviBar from "./components/NavBar/NaviBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./components/profile/Profile";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetAuth())
  }, [dispatch])
  const {isLoading} = useSelector(state => state)
  return (
    <div className="App">
      {isLoading?<h1>....isLoading</h1>:<Router>
        <NaviBar/>
        <Switch>
          <Route path="/login">
            <LoginUser />
          </Route>
          <Route path="/registre">
            <RegistreComp />
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>}
    </div>
  );
}

export default App;
