import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes.helper"
import logo from "../../../img/logo.png"

export default function Nav(props){
    const {onSearch} = props;
    return (
        <div className={styles.nav}>
            <img src={logo} />
          <div className={styles.wrapperButton}>
                <Link to={PATHROUTES.HOME} className={styles.linkRouter}>
                Home
                </Link>
                <Link to={PATHROUTES.ABOUT} className={styles.linkRouter}>
                About
                </Link>
                <Link to={PATHROUTES.FAVORITES} className={styles.linkRouter}>
                Favorites
                </Link>
                <SearchBar onSearch = {onSearch}/>
            </div>
           
            
            
        </div>
    )
};
