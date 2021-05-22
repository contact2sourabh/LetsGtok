import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Components/Nav/Navb';
import TopSection from './Components/Top/TopSection';
import MidSection from './Components/Mid/MidSection';
import LastSection from './Components/Last/LastSection';
import './App.css';


const App = () => {

  return (
    <div >
      <Navb />
      <TopSection />
      <MidSection />
      <LastSection />
    </div>

  );
};
export default App;