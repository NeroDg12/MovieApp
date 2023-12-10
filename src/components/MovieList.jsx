import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import SearchBar from './SearchBar';
import MovieHeading from './MovieHeading';



const MovieList = () => {

  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [totalResults, setTotalResults] = useState(0);


  const movieData = async (searchValue) => {
    try{
      const res = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=65159faa&`)
      setMovie(res.data.Search)

    }catch(err){
      console.log("ERROR: ",err);
    }
  }
  useEffect(()=>{
    movieData(searchValue);
  },[searchValue])

    useEffect(()=>{
    const favoriteSaved = JSON.parse(localStorage.getItem("saveFav"))

    if(favoriteSaved){
      setFavorite(favoriteSaved)
    } 
  },[])
  
  const handleFavClick = (movie) => {
    const favoriteMovie = [...favorite,movie]
    setFavorite(favoriteMovie)
    saveLocalStorage(favoriteMovie)
  }

  const saveLocalStorage = (item)=>{
    localStorage.setItem("saveFav",JSON.stringify(item))
  }


  const handleRemove = (movie) => {

    const remove = favorite.filter((fav)=>fav.imdbID !== movie.imdbID)
    setFavorite(remove)
    saveLocalStorage(remove)
  }




  return (
    <>
      <div className='w-full '>
        <div className='flex items-center overflow-x '>
          <MovieHeading heading={"Movies"}/>
          <SearchBar  searchValue={searchValue}  setSearchValue = {setSearchValue}/>
        </div>

          <div className='flex gap-5 '>
          
            {movie && movie.map((datas) => (
              <div key={datas.imdbID}>
                <MovieCard title={datas.Title} year={datas.Year} poster={datas.Poster} handleFavClick={handleFavClick} datas={datas} />
              </div>
            ))}
          
          </div>

          <div className= "" >
            <MovieHeading heading={"Favorite"}/>
            <div className='flex gap-5 overflow-y-auto '>

            {favorite && favorite.map((datas) => (
              <div key={datas.imdbID}>
                <MovieCard title={datas.Title} year={datas.Year} poster={datas.Poster} handleFavClick={handleRemove} datas={datas} />
              </div>
            ))}
        </div>
        </div>
            
      </div>





    </>
  )
}

export default MovieList