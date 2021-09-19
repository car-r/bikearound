
import './App.css';
import BikeType from './components/BikeType';
import ExploreTrails from './components/ExploreTrails';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HostBike from './components/HostBike';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <BikeType />
      <ExploreTrails />
      <HostBike />
      <Footer />
    </div>
  );
}

export default App;
