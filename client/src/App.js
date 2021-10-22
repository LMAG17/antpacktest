import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Link, Route, Switch, useLocation
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Posts from './Pages/Posts';
import Users from './Pages/Users';
import PostForm from './Pages/PostForm';
import store from './redux/store/store';
import UserForm from './Pages/UserForm';

//https://reactrouter.com/web/example/query-parameters
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <RoutesWithQuery />
      </Router>
    </Provider>
  )
}

function RoutesWithQuery() {
  const query = useQuery();

  return (
    <div>
      <nav >
        <ul id="navUl">
          <li>
            <Link id="brand" to="/home">Inicio</Link>
          </li>
          <li>
            <Link className="link" to="/users">Usuarios</Link>
          </li>
          <li>
            <Link className="link" to="/posts">Publicaciones</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route exact path="/createPost">
            <PostForm />
          </Route>
          <Route exact path="/createUser">
            <UserForm />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
