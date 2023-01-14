import searchicon from "./search-3-16-removebg-preview.png"
function Search({searchitem, handleSearchitem}){
    return(
      <div className='searchbar'>
        <input  onInput={handleSearchitem} name="search" value={searchitem}type="text " placeholder='Search Your Recent Transaction' />
        <img src={searchicon} alt="search icon"/>
      </div>
    )
  }
  export default Search;