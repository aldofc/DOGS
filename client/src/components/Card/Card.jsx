import React from 'react'
import { Link } from 'react-router-dom'
//import {Link} from 'react-router-dom'
import './Card.css'

const Card = ({image,name,diets,id,healthscore}) => {
  return (
    <div > <h1>soy una Card</h1>
      {/* <Link to={`/home/${id}`}>
        <img src={image} alt="imagen" />
      </Link>

    

    <div>
      <h3>tipo de dieta{diets.join(',')}</h3>
      <h3>{name}</h3>
      <h3>healthscore{healthscore}</h3>
    </div> */}

    
    </div>
  )
}

export default Card