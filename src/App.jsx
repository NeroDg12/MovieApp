import { useState } from "react"
import MovieList from "./components/MovieList"
import SearchBar from "./components/SearchBar"
import MovieHeading from "./components/MovieHeading"
import "./App.css"



export default function App() {



  return (
    <>
      <div className="w-full h-screen ">
        
          <MovieList  />

      </div>


    </>
  )
}