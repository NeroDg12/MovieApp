import React,{useState} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";


const MovieCard = ({handleFavClick,poster,datas}) => {
  // const [value, setValue] = useState({title,year,poster});
  return (
    <>
      
      <div className='w-full'>
        <img className=' h-[25rem] object-contain  cursor-pointer rounded-lg hover: transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 ... ' 
        src={poster}
        onClick={()=>handleFavClick(datas)} 
         alt="" /> 
      </div>
      

    </>
  )
}

export default MovieCard;