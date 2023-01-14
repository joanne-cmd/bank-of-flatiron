function Category({addTranscation}){
    function submit (event){
      event.preventDefault()
      
      const addedData ={
        date: event.target.date.value,
        description: event.target.description.value,
        category:event.target.category.value,
        amount:event.target.amount.value
      }

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
  export default Category;