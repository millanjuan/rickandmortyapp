//React and helpers
import {useState, useEffect} from "react";
import './App.css';
import PATHROUTES from "./helpers/PathRoutes.helper";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";


// Components
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import axios from "axios";
import Detail from "./components/Detail/Detail"
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites"
// -------------------------------------------------------




function App() {
   // ESTADOS
   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   // VARIABLES
   // const EMAIL = "";
   // const PASSWORD = "";
   const {pathname} = useLocation();


   // const login = (userData) => {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate(PATHROUTES.HOME);
   //    }
   // };

   async function login(userData) {

      try {
         
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';

         const {data} = await axios(
            URL + `?email=${email}&password=${password}`
         );
         const { access } = data;
         setAccess(data);
         access && navigate('/home');

      } catch (error) {
         console.log(error);
      }

      // const { email, password } = userData;
      // const URL = 'http://localhost:3001/rickandmorty/login/';
      // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      //    const { access } = data;
      //    setAccess(data);
      //    access && navigate('/home');
      // });
   }


   const onSearch = async (id) => {

      try {

         const {data} = await axios(
            `http://localhost:3001/rickandmorty/character/${id}`
            )
         if(data.name){
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (error) {
         
      }


      // axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      //    ({ data }) => {
      //    if (data.name) {
      //       setCharacters((oldChars) => [...oldChars, data]);
      //    } else {
      //       window.alert('¡No hay personajes con este ID!');
      //    }
      // });
   }

   useEffect(()=> {
      !access && navigate (PATHROUTES.LOGIN)
   }, [access]);

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== id;
         })
      )
   }
   return (
      
      
      <div className='App'>
        {pathname !== PATHROUTES.LOGIN && <Nav onSearch = {onSearch}/>}

         <Routes>
         <Route path={PATHROUTES.HOME} element= {<Cards characters={characters} onClose={onClose}/>}/>
         <Route path={PATHROUTES.ABOUT} element= {<About/>}/>
         <Route path={PATHROUTES.DETAIL} element={<Detail/>}/>
         <Route path={PATHROUTES.LOGIN} element={<Form login = {login} />}/>
         <Route path={PATHROUTES.FAVORITES} element={<Favorites/>}/>

         
               
      </Routes>
         
      </div>
   
      
   );
}

export default App;