import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import SearchBar from './SearchBar';



const MovieList = () => {

  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const movieData = async (searchValue) => {
    try{
      const res = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=65159faa`)
      setMovie(res.data.Search)

    }catch(err){
      console.log("ERROR: ",err);
    }

  }

  useEffect(()=>{
    movieData(searchValue);
  },[searchValue])

  return (
    <>
      <div className='w-full'>
        <div className='relative bottom-32'>
          <SearchBar  searchValue={searchValue}  setSearchValue = {setSearchValue}/>
        </div>

        <div className='flex gap-5'>

          {movie && movie.map((datas) => (
            <div key={datas.imdbID}>
              <MovieCard title={datas.Title} year={datas.Year} poster={datas.Poster} />
            </div>
          ))}
        </div>

      </div>





    </>
  )
}

export default MovieList