import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './Pages/Login';

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
