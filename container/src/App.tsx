import React from 'react';
// import './App.css';

const Mfe1 = React.lazy(() => import('mfe1/MicroFrontendOne'));


function App() {
  return (
    <div className="App">
      <Mfe1 />
    </div>
  );
}

export default App;
