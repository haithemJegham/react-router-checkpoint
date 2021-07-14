import React from 'react';
import MovieCard from "./MovieCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import {Link} from 'react-router-dom'


const MovieList = ({Movies}) => {
  
  
  return(
<div className='movieCard'>
    <div className='movieList'>
    <div className='wrapp'>

{Movies.length > 0 ? Movies.map(movie => (
  <div key={movie.id+'e'}>

<Link key={movie.id+'l'} to={`/description/${movie.id}`} >
  < MovieCard key={movie.id + 'd'}  title={movie.title} myimage={movie.img} stars={movie.stars} text={movie.bio} />
  
</Link>
  </div>)) : <h1 >No Movie To Show</h1>}

</div>


  
</div>
</div>)}
export default MovieList;


