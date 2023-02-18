import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here
  function tFunc(e){
    const elem=e.target.parentNode.querySelector('.redColor').classList.toggle('blueColor');
  }
  return (
    <div id="main">
      <p className={'redColor'} >Newton School</p>
      <button id='button' onClick={tFunc}>Change Style</button>
    </div>
  )
}


export default App;
