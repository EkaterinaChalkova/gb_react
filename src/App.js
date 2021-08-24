import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Profile from "./Profile";
import Home from "./Home";
import AppBar from "./AppBar";
// import NotFound from "./NotFound";
import { theme } from "./theme";

const App = () => {
  return (
    <Router>
      <AppBar />

      <Switch>
        <Route path="/chat">
          <Chat />
          {/* <Switch>
            <Route path="/chat/:chatId"></Route>
          </Switch> */}
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        {/* <Route component={NotFound} /> */}

        <Route>
          <h3>Page not found</h3>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
