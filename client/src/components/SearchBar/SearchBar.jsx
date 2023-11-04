import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
   const [id, setId] = useState(" ");
   const handleChange = (e) => {
      //1- debo capturar el input
      //2- debo guardar esa data en el ESTADO local id
      setId(e.target.value);
   }
   const { onSearch } = props;
   return (
      <div>
         <input className={styles.input} type='search' onChange={handleChange} value={id}/>
         <button className={styles.btn} onClick= {() => onSearch(id)}>Buscar</button>
      </div>
   );
}
