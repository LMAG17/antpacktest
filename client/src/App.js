import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Link, Route, Switch, useLocation
} from "react-router-dom";
import Login from './Pages/Login';
import store from './redux/store/store';

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

      <div>
        <Switch>

          <Route exact path="/">
            <Login />
          </Route>

        </Switch>
      </div>

      <nav >
        <ul id="navUl">
          <li>
            <Link id="brand" to="/">Inicio</Link>
          </li>

          <li>
            <Link className="link" to="/">Usuarios</Link>
          </li>

          <li>
            <Link className="link" to="/create">Publicaciones</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
