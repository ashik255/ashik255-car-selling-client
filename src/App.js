import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import NotFound from "./NotFound/NotFound";
import Dashboard from "./pages/DashBoard/Dashboard";
import OrderMap from "./pages/DashBoard/My Order/OrderMap";
import Explores from "./pages/Home/Home/Explore/Explores";
import Home from './pages/Home/Home/Home';
import PlacerOrder from "./pages/Home/PlaceOrder/PlacerOrder";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Login/Register/Register";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Footer from "./pages/Shared/Navigation/Footer/Footer";
import Navigation from './pages/Shared/Navigation/Navigation';

function App() {

  return (

    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/detail/:serviceId'>
              <PlacerOrder></PlacerOrder>
            </PrivateRoute>
            <Route path='/explore'>
              <Explores></Explores>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/myorders'>
              <OrderMap></OrderMap>
            </PrivateRoute>
            <Route path ='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>

  );
}

export default App;
