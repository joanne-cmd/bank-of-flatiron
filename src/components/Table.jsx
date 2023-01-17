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
                  <td>delete</td>
                </tr> 

                
              )
            })
            }
        </tbody>
        </table>
        
      
      </div>
  
    )
    }
    
    export default Table;