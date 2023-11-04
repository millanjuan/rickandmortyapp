import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"

const Detail = ( ) => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(
    <div className={styles.wrapperDetail}>
    {character ? (
      <>
      <div className={styles.wrapperImg}>
        <img
              src={character.image}
              style={{ borderRadius: "50%", width: "400px", height: "420px" }} 
        />
      </div>
      
      <div className={styles.wrapperText}>
        <h1>{character.name}</h1>           
        <h2>Status: {character.status}</h2>{" "}
        <h2>Specie: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>

              
      </div>
      </>
    ) : (
      <h1>Loading...</h1>
    )}
  </div>
);
};

export default Detail;