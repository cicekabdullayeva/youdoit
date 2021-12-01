// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/font.css';
import './assets/css/style.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { lazy ,Suspense} from "react";
import PageLoading from "./component/PageLoading";
import Register from './view/Register';
import './assets/css/stylemain.css';
const Chat = lazy(() => import("./view/Chat"));
const Login = lazy(() => import("./view/Login"));
// const Register = lazy(() => import("./view/Register"));

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route exact path="/Register" render={() => <Register />} />
          <Route exact path="/Chat" render={() => <Chat />} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
