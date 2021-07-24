import './App.css';
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import UserProfile from '../components/UserProfile';
import PrivateRoute from '../components/PrivateRoute';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
      <Route exact path ="/" component={Home}></Route>
      <Route exact path ="/login" component={Login}></Route>
      <Route exact path ="/register" component={Register}></Route>
      <PrivateRoute exact path ="/profile" component={UserProfile}></PrivateRoute>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
