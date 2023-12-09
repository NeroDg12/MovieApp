import React,{useState} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";


const MovieCard = ({title,year,poster}) => {
  // const [value, setValue] = useState({title,year,poster});
  return (
    <>
      
      <div className='w-full'>
        <img className=' h-[25rem]  object-cover rounded-lg hover:h-[27rem] w-[20rem]' 
        src={poster} alt="" /> 
      </div>
      

    </>
  )
}

export default MovieCard;