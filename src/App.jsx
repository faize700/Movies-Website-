import Movie from './components/Movie.jsx'
import Header from './components/Header.jsx'
import movies from './movie.json'

function App() {
  return (
    <>
    <Header/>
      <div className='main'>
      {
        movies.map((element,index) => {
          return(
            <Movie
              key = {index}
              title = {element.Title}
              year = {element.Year}
              img = {element.Poster} 
            />
          )
        })
      } 
      </div>
    </>
  )
}
export default App