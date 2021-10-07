import React from 'react';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import {data} from '../data';
import {addMovies} from '../actions/index';


class App extends React.Component{
  
  componentDidMount(){

    const store=this.props.store;
    store.subscribe(()=>{
      console.log("Updated");
      this.forceUpdate();
    });
    this.props.store.dispatch(addMovies(data));

    console.log('STATE',this.props.store.getState());
  }

 
  render(){
    const movies=this.props.store.getState();
   
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
                movies.map((item,index)=>{
                  console.log(item);
                  return  <MovieCard movie={item} key={`movie-${index}`}/>
                })
              }

          </div>

      </div>


    </div>
  );

    }
}

export default App;
