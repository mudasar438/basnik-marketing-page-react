import logo from './logo.svg';
import './App.css';
import Navbar from './Componets/Navbar';
import Hero from './Componets/images/Hero';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <>

      <div className="container">
        <Router>
        <Navbar />
     
      
        <Routes>

           <Route path="" element={<Hero />} />

          {/* <Route path="/kzotoken" element={<KZOToken />} />

          <Route path="/reallaunch" element={<RealLaunch />} />

          <Route path="/nfts" element={<NFTs />} />

          <Route path="/staking" element={<Staking />} />

          <Route path="/resources" element={<Resources />} />

          <Route path="/ContactChannel" element={<ContactChannel />} />

          <Route path="/carrer" element={<Carrer />} /> */} 

        </Routes>
      </Router>


      </div>
      
      </>
  );
}

export default App;
