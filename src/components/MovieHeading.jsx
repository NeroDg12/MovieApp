import React from 'react'

const MovieHeading = (props) => {
  return (
    <>
      <h1 className='fixed text-[4rem] pl-4 font-[Merriweather] text-white'>{props.heading}</h1>
    </>
  )
}

export default MovieHeading