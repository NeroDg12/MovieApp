import React from 'react'

const SearchBar = ({searchValue,setSearchValue}) => {
  return (
    <>
      <div className=" mx-auto mt-14 w-[20rem] flex">
        <input type="text" placeholder="Enter Movies" className="input input-bordered input-info w-full max-w-xs "
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </>
  )
}

export default SearchBar