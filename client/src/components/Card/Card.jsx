import {addFav, removeFav} from "../../redux/actions";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { formToJSON } from "axios";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


function Card(props) {
   const {id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites} = props;
   const [isFav, setIsFav] = useState(false);

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav);
   };

   return (
      <div className={styles.cardContainer}>
         <div className={styles.header}>
            
            <div>
            {
            isFav ? (
               <button onClick={handleFavorite} className={styles.favBtn}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={styles.favBtn}>🤍</button>
               )
         }
               <Link to={`/detail/${id}`} style={{textDecoration:"none", color:"inherit"}}>

                  <h2 className={styles.name}>{name}</h2>

               </Link> 
            </div>
           <div className={styles.wrapperStatusText}>

               <h2 className={status == "Alive" ? styles.statusAlive: status === "Dead" ? styles.statusDead : styles.statusUnknown}>{status}</h2>           
           
           </div>

            <div className={styles.wrapperButton}>
               <button className={styles.btn} onClick={() => onClose(id)}>
               X
               </button>
            </div>
            <div className={styles.wrapperImg}>
               <img className={styles.cardImg} src={image} alt='' />
            </div>
            
            
         </div>
         <div>
            
         </div>
         <div className={styles.wrapperText}>           
            <h2>{species}</h2>
            <h2>{gender}</h2>
            {/* <h2>{origin}</h2> */}
         
         </div>
         
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav : (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      },
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Card);