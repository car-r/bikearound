
import './App.css';
import {Switch, Route} from "react-router-dom"

import Host from './pages/Host';
import BikeType from './components/BikeType';
import ExploreTrails from './components/ExploreTrails';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HostBike from './components/HostBike';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Bikes from './pages/Bikes';
import FavoriteBikes from './pages/FavoriteBikes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <HeroSection />
          <BikeType />
          <ExploreTrails />
        <HostBike />
        </Route>

        <Route path='/favorites'>
          <FavoriteBikes />
        </Route>
        <Route path='/host'>
          <Host />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/bikes'>
          <Bikes />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
