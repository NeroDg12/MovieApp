import MovieList from "./components/MovieList"


export default function App() {
  return (
    <>
      <div  >
        <h1 className="text-3xl  pt-4 text-white">Movies</h1>
        <div className="flex">
          <MovieList/>
        </div>  

      </div>


    </>
  )
}