import { useState } from "react";


 function SearchMovie({movieData,getSingle,searchInput, setSearchInput,status,setStatus}){



   const handleChange = (value)=>{
    setSearchInput(value)
    setStatus((pre)=> pre = false)
   }

   const String = (str) => {
      return str.toLowerCase().trim().replace(/\s+/g, '');
    };

   const search = ()=>{
      
      const SearchInput = String(searchInput);
      const filterData = movieData.filter((ele) => 
        String(ele.title) === SearchInput
      );
     console.log("file",filterData)
      getSingle(filterData)
   }

     return(
        <div>
        <input 
        type="text"
        value={searchInput}
        placeholder="Enter Movie name"
        onChange={(e)=>handleChange(e.target.value)}
        />
       <button onClick={search}>search</button>
      
        </div>
     )
 }
 export default SearchMovie;


