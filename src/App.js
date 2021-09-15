import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Dog from "./Dog";
import Profile from "./Profile";
import Home from "./Home";
import AppBar from "./AppBar";

// import NotFound from "./NotFound";
import { theme } from "./theme";
import ChatListComponent from "./Chat/ChatListComponent";
import { useParams } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <AppBar />

      <Switch>
        <Route path="/chat/:chatId">
          <Chat />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>

        <Route path="/dog">
          <Dog />
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
