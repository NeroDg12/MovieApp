import React,{useEffect, useState} from 'react'
import MovieCard from './MovieCard'
import axios from 'axios' 



const MovieList = () => {

  const [movie, setMovie] = useState([]);

  const movieData = async () => {
    try{
      const res = await axios.get("http://www.omdbapi.com/?s=avengers&apikey=65159faa")
      setMovie(res.data.Search)
      
    }catch(err){
      console.log("ERROR: ",err);
    }

  }
  console.log(movie);

  useEffect(()=>{
    movieData();
  },[])


  return (
    <>
      <div className='flex gap-5 pt-20'>
        
          {movie && movie.map((datas) =>(
          <div key={datas.imdbID}>
              <MovieCard title={datas.Title} year={datas.Year} poster={datas.Poster}/>
          </div>
          ))}
      </div>



      
    </>
  )
}

export default MovieList