import React from "react";
import {smallImage} from '../util'

// Styling and anim
import styled from "styled-components";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'

// Redux
import {useDispatch} from 'react-redux'
import {loadDetail} from '../actions/detailAction'

const Game = ({ name, released, image,id }) => {

  // load detail
  const dispatch = useDispatch();
  const loadDetailHandler =()=>{
    document.body.style.overflow='hidden';
    dispatch(loadDetail(id))
  }

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={smallImage(image, 640)} alt={name} />
      </Link> 
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align:center;
  border-radius:1rem;
  overflow:hidden;
  transition: all .10s ease-out;
  cursor:pointer; 

  &:hover{
    transform:scale(1.1);
  }
  img {
    width: 100%;
    height:40vh; 
    object-fit:cover;
    
  }
`;

export default Game;
