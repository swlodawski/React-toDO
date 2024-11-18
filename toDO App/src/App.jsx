import React from 'react';
import ToDOList from './components/ToDOList';
import ToDOItem from './components/ToDOItem';
import './App.css'

function App() {

  return (
    <>
  <div className='App'>
    <ToDOList />
    <ToDOItem />
  </div>
    </>
  );
}

export default App
