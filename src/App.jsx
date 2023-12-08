import MovieList from "./components/MovieList"
import SearchBar from "./components/SearchBar"


export default function App() {
  return (
    <>
      <div className="w-full h-screen ">

        <h1 className="text-[5rem] font-[Merriweather] pl-3 pt-4 text-white">Movies</h1>

        <div className="flex ">
          <MovieList/>
        </div>  

      </div>


    </>
  )
}