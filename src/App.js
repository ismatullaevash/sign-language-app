import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import SplashPage from "./splash";
import BasicHome from "./basicsHomePage";
import ChooseDomHand from "./handDominance";
import Quiz from "./quiz";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route exact path="/basic">
            <BasicHome />
          </Route>
          <Route exact path="/hand">
            <ChooseDomHand />
          </Route>
          <Route exact path="/quiz">
            <Quiz />
          </Route>
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
