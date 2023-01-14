import { type } from '@testing-library/user-event/dist/type';
import React,{ useState, useEffect } from 'react';
import './App.css';
import searchicon from "./search-3-16-removebg-preview.png"

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

function Search({searchitem, handleSearchitem}){
  return(
    <div className='searchbar'>
      <input  onInput={handleSearchitem} name="search" value={searchitem}type="text " placeholder='Search Your Recent Transaction' />
      <img src={searchicon} alt="search icon"/>
    </div>
  )
}

function  Table ({tableDetails}){


  return (
    <div className='table'>
      <table>
      <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th> Amount</th>
          </tr>
      </thead>
      <tbody>
        {
          tableDetails.map((details)=>{
            return(
              <tr key={details.id}>
                <td >{details.date}</td>
                <td >{details.description}</td>
                <td >{details.category}</td>
                <td >{details.amount}</td>
              </tr> 
            )
          })
          }
      </tbody>
      </table>
    
    </div>

  )
  }

  function Category({addTranscation}){
    function submit (event){
      event.preventDefault()
      
      const addedData ={
        date: event.target.date.value,
        description: event.target.description.value,
        category:event.target.category.value,
        amount:event.target.amount.value
      }

      alert(addedData)
      addTranscation(addedData)
    }
    return(
      <form className='formts' onSubmit={submit}>
      <div className="inputs">
        <label>Date:</label>
        <input name="date" type="date" />
        <input  name="description" placeholder='Description' type="text"/>
        <input  name="category" placeholder='category' type="text"/>
        <input  name="amount" placeholder='Amount' type="number"/>
      </div>
        <button className='trans'>Add Transaction</button>
      </form>
    )
  }


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
