import {data} from '../data';
import NavBar from './NavBar';
import MovieCard from './MovieCard';


function App() {
  return (
    <div className="App">
      
      <NavBar />
      <div className="main">

          <div className="tabs">
              <div className="tab">Movies</div>
              <div className="tab">Favourites</div>
          </div>

          <div className="list">

              {
                data.map((item)=>{
                  console.log(item);
                  return  <MovieCard movie={item} />
                })
              }

          </div>

      </div>


    </div>
  );
}

export default App;
