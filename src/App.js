import { Route,Routes } from 'react-router-dom'
import Navigation from './Routes/navigation/navigation.route'
import Home from './Routes/home/home.route';
import Contact from './Routes/contact/contact.route';
import About from './Routes/about/about.route';
import CampaignsRoute from './Routes/campaigns/campaigns.router';
import BloodRouter from './Routes/blood/blood.router';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route path='/' index element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/campaigns' element={<CampaignsRoute/>}/>
          <Route path='/bloods/*' element={<BloodRouter/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
