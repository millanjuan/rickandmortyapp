import { connect, useDispatch } from "react-redux";
import {orderCards, filterCards} from "../../redux/actions"
import { useState } from "react";
import Cards from "../Cards/Cards"



const Favorites = (props) => {
    const {myFavorites} = props;
    const dispatch = useDispatch();

    const [aux, setAux] = useState(false)

    //funciones handle
    const handleOrder = (e) => {
      dispatch(orderCards(e.target.value))
      setAux(!aux)
    };
    const handleFilter = (e) => {
      dispatch(filterCards(e.target.value))
    };

    return (
            <div>
               <select onChange={handleOrder}>
                  <option value="A">Ascendente</option>
                  <option value="D">Descendente</option>
               </select>

               <select onChange={handleFilter}>
                  <option value="All">ALL</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Genderless">Genderless</option>
                  <option value="unknown">unknown</option>
               </select>

               <Cards characters={myFavorites} />
            </div>
            
            )
        
};

const mapStateToProps = (state) => {
    return {myFavorites : state.myFavorites,};
};

export default connect(mapStateToProps, null)(Favorites);