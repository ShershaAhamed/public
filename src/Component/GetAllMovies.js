import {useEffect, useState} from "react"
import "../App.css"
import SearchMovie from "./SearchMovie"
import MovieModal from "./MovieModel"

  function GetAllMovies(){

    const [movies,setMovies] = useState("")
    const [searchInput,setSearchInput] = useState("")
    const [model,setModel] = useState("")
    const [status,setStatus] = useState(false)

    useEffect(()=>{
        getMovies()
    },[searchInput])

    const getMovies = async()=>{

        const data = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",{
            method : "GET",
            headers : {
                
                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWMzMTNjYWJmZTlhNjFmNzEwMjUwMDJmOGNmYWVkNCIsInN1YiI6IjY2NzE2ZjNjYzdjOGVhZWI4ZDNmMGU5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E-DRoILXtrSGlN11uVIPc3tDwtfaeJ5FBVPmHW1bA0o'
            },
            
        })

        const res = await data.json()

        console.log(res)
        setMovies(res.results)
    }
   console.log(movies)



const getMovie = (data)=>{
       
      setMovies(data)
    }

    const clearMovie = async()=>{
    
      getMovies()
      setSearchInput("")
      setStatus((pre)=>pre = false)
    }


  const viewMovie = (ind)=>{
      setStatus((pre)=>pre = true)
      let data = movies.filter((ele,index)=> index == ind)
      setModel(data)
  }  
 console.log(model)
      return(
        <div className="movie-container">
           <div className="sub-child1">
            <div className="search">
            <SearchMovie 
            movieData={movies} 
             getSingle ={getMovie} 
              searchInput={searchInput} 
              setSearchInput ={setSearchInput}
              status={status}
               setStatus={setStatus}
            />
            <button onClick={clearMovie}>clear</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>S.no</th>
                    <th>Movie Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {movies && movies?.map((ele,index)=>{
                return(
                   <tr key={index}>
                    <td>{index+1}</td>
                    <td>{ele.title}</td>
                    <td><button onClick={()=>viewMovie(index)}>view</button></td>
                   </tr>
                )
            })}

           </tbody>
            </table>
            </div>
            <div className={ status ? "open" : "close"}  id="sub-child2">
            <MovieModal model={model} status={status} setStatus={setStatus}/>
            </div>
        </div>
      )
  }
  export default GetAllMovies;


