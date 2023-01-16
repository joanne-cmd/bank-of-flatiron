import React,{ useState, useEffect } from 'react';
import './App.css';
import Headers from './components/Headers';
import Search from './components/Search';
import Table from './components/Table';
import Category from './components/Category';


function App() {
  const [ searchitem , setsearchitem]= useState("")
  const [ tableDetails , settableDetails]= useState([])

  function handleSearchitem(event){
      setsearchitem(event.target.value)
      
  }

  function fetchData(url){
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>{ settableDetails(data)})
  }

  function addTranscation(trans){
    fetch("http://localhost:4000/transactions",{
      method: "POST",
      headers:{"Content-Type":"application/json",
              "Accept":"application/json"
    },
    body:JSON.stringify(trans)

    })
    .then(resp=>resp.json())
    .then( data=>settableDetails([data, ...tableDetails ]))
    
  }

  
   useEffect(()=>{
    fetchData("http://localhost:4000/transactions")
   },[])
const tableDetailsfilter=tableDetails.filter((detailstable)=>{
  if (setsearchitem === ""){
    return true
  }
  else{
    return detailstable.description.toLowerCase().includes(searchitem.toLowerCase())
  }
  
})
  return (
    <div className='app'>
        <Headers/>
        <Search handleSearchitem={handleSearchitem}searchitem={searchitem}/>
        <Category addTranscation={addTranscation} />
        <Table tableDetails={tableDetailsfilter}/>
    </div>
    
  )
  
}

export default App;