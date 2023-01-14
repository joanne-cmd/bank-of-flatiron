import React,{ useState } from 'react';
import './App.css';
function Headers(){
  return(
    <div className="heading">
      <h1 >Bank of Flatiron</h1>
      <p>Welcome to the Bank of Flatiron, where you can trust us with all your financial data!
       Use the below gif as an example of how the app should function.</p>
       <button className='btn'>The Royal Bank of Flatiron</button>
    </div>
  )
}
function Search({searchitem}){
  return(
    <div className='searchbar'>
      <input name="search" value={searchitem}type="text " placeholder='Search Your Recent Transaction' />
    </div>
  )
}

function App() {
  const [ searchitem , setsearchitem]= useState()
  return (
    <div className='app'>
        <Headers/>
        <Search searchitem={searchitem}/>
    </div>
    
  )
  
}

export default App;
