import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Description = ({ Movies, match }) => {
  const film = Movies.find((elm) => elm.id === match.params.id);
  console.log(film);

  return (
    <div>
      
            
            
            
      <Navbar  bg="dark" expand="lg"> 
      <Link to="/">
      <Button className="home" >HOME</Button> 
      
      </Link>
      
      <h1  style={{ color: "white" }} >{film.title}</h1> 
              </Navbar>
      
      
      <div className="desc-2">
        <Card.Img src={film.img} alt="moviePoster" className="poster" />
        <div className="desc-1">
          <Card.Title>{film.title}</Card.Title>
          <Card.Text style={{ width: "60%" }}> {film.bio}</Card.Text>

          <iframe
            width="560"
            height="315"
            src={film.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <Link to="/">
            <Button className="home">HOME</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Description;
