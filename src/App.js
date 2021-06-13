import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AuthRouter from "./components/AuthRouter";
import Countdown from "./components/Countdown";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import NotFound from "./components/NotFound";
import PrivateRouter from "./components/PrivateRouter";
function App() {
  const [user, setUser] = useState({
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
  });
  const handleLogin = (newUser) => {
    setUser({ ...newUser });
  };
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setUser({});
  };
  return (
    <div className="App">
      <Header user={user} onLogout={handleLogout} />
      <Switch>
        <PrivateRouter exact path={`/`} component={Countdown} />
        <AuthRouter
          exact
          path={"/login"}
          onLogin={handleLogin}
          component={LoginForm}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
