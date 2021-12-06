// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/font.css";
import "./assets/css/style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import PageLoading from "./component/PageLoading";
import Register from "./view/Register";
import "./assets/css/stylemain.css";
import { ContextProvider } from "./context/Context";

const Chat = lazy(() => import("./view/Chat"));
const Login = lazy(() => import("./view/Login"));
// const Register = lazy(() => import("./view/Register"));

function App() {
  let history = useHistory();
  useEffect(() => {
    let login = localStorage.getItem("token");
    if (!login) {
      // history.replace("Login");
      // window.location.replace("Login");
    }
  }, [history]);
  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route exact path="/Chat">
            <ContextProvider>
              <Chat />
            </ContextProvider>
          </Route>
          <Route exact path="/Register" render={() => <Register />} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
