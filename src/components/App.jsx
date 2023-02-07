import React from 'react';
import Header from './Header'
import "../index.css"
import MarketSchedule from './MarketSchedule';
import ProduceList from './ProduceList';


function App() {
  return (
    <React.Fragment>
      <Header />
      <hr />
      <MarketSchedule />
      <hr />
      <ProduceList />
    </React.Fragment>
  );
}

export default App;
