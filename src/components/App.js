import React from 'react';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import {data} from '../data';
import {addMovies, showFavourtie} from '../actions/index';
import { connect, StoreContext } from '..';


/**
 * 
 * see this App will be passed to connect by refernce shallow copy ig and it will render this and props will be passed to this
 * and the wrapper will be returned from connect and it will be sent to be rendered
 * 
 * 
 * 
 * 
 * 
 * 
 */

class App extends React.Component{
  
  componentDidMount(){

    // const store=this.props.store;
    // store.subscribe(()=>{
    //   console.log("Updated");
    //   console.log('STATE',this.props.store.getState());
    //   this.forceUpdate();
    // });
    this.props.dispatch(addMovies(data));

    // console.log('STATE',this.props.store.getState());
  }

  isFavourite=(movie)=>{
     
    const {movies}=this.props;
    const {favourites}=movies;

    const index=favourites.indexOf(movie);

    console.log(movie,index);

    if(index>=0)
    return true;
    return false;



  }
  changeTab=(val)=>{
      this.props.dispatch(showFavourtie(val));
  }

 
  render(){
    const {movies,search}=this.props;
    const { list,favourites,showFavourite }=movies;

    const data=showFavourite?favourites:list;
   
  return (
    <div className="App">
      
      <NavBar dispatch={this.props.dispatch} search={search}/>
      <div className="main">

          <div className="tabs">
              <div className={`tab ${showFavourite? ' ' :'active-tabs' }` } onClick={()=>this.changeTab(false)}>Movies</div>
              <div  className={`tab ${showFavourite? 'active-tabs' :'' }` } onClick={()=>this.changeTab(true)}>Favourites</div>
          </div>

          <div className="list">

              {
                data.map((item,index)=>{
                  // console.log(item);
                  return  <MovieCard movie={item} key={`movie-${index}`}  dispatch={this.props.dispatch}  isFavourite={this.isFavourite(item)}/>
                })
              }

          </div>

      </div>
        
        {data.length===0?<div className="no-movies">No Movies to Show</div>:null}

    </div>
  );

    }
}

// class AppWrapper extends React.Component {
//   render() { 
//     return(
//       <StoreContext.Consumer>
//         {
//           (store)=>{
//             return (
//               <App store={store}/>
//             );
//           }
//         }
       
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(state)
{
  return {
    movies:state.movies,
    search:state.search
  }
}

const ConnectedComponent=connect(mapStateToProps)(App);


 
export default ConnectedComponent;


