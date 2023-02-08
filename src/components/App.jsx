import React from 'react';
import Header from './Header'
import "../index.css"
import MarketSchedule from './MarketSchedule';
import ProduceList from './ProduceList';


function App() {
  return (
    <React.Fragment>
      <Header />
      <div id="content-wrapper">
      <MarketSchedule />
      <ProduceList />
      </div>
    </React.Fragment>
  );
}

export default App;
