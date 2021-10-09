import React from 'react';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import {data} from '../data';
import {addMovies, showFavourtie} from '../actions/index';
import { StoreContext } from '..';


class App extends React.Component{
  
  componentDidMount(){

    const store=this.props.store;
    store.subscribe(()=>{
      console.log("Updated");
      console.log('STATE',this.props.store.getState());
      this.forceUpdate();
    });
    this.props.store.dispatch(addMovies(data));

    console.log('STATE',this.props.store.getState());
  }

  isFavourite=(movie)=>{
     
    const {movies}=this.props.store.getState()
    const {favourites}=movies;

    const index=favourites.indexOf(movie);

    console.log(movie,index);

    if(index>=0)
    return true;
    return false;



  }
  changeTab=(val)=>{
      this.props.store.dispatch(showFavourtie(val));
  }

 
  render(){
    const {movies,search}=this.props.store.getState();
    const { list,favourites,showFavourite }=movies;

    const data=showFavourite?favourites:list;
   
  return (
    <div className="App">
      
      <NavBar dispatch={this.props.store.dispatch} search={search}/>
      <div className="main">

          <div className="tabs">
              <div className={`tab ${showFavourite? ' ' :'active-tabs' }` } onClick={()=>this.changeTab(false)}>Movies</div>
              <div  className={`tab ${showFavourite? 'active-tabs' :'' }` } onClick={()=>this.changeTab(true)}>Favourites</div>
          </div>

          <div className="list">

              {
                data.map((item,index)=>{
                  // console.log(item);
                  return  <MovieCard movie={item} key={`movie-${index}`}  dispatch={this.props.store.dispatch}  isFavourite={this.isFavourite(item)}/>
                })
              }

          </div>

      </div>
        
        {data.length===0?<div className="no-movies">No Movies to Show</div>:null}

    </div>
  );

    }
}

class AppWrapper extends React.Component {
  render() { 
    return(
      <StoreContext.Consumer>
        {
          (store)=>{
            return (
              <App store={store}/>
            );
          }
        }
       
      </StoreContext.Consumer>
    );
  }
}
 
export default AppWrapper;


