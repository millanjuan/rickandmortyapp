import { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css"
import logo from "../../../img/logo.png"

const Form = (props) => {
    const {login} = props;

    const [userData, setUserData] = useState({
      email: "",
      password: "",  
    });

    const [errors, setErrors] = useState({});
    
    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setErrors(validation({...userData, [property]:value}))
        setUserData({...userData, [property]:value})
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    };

    return (
            <form onSubmit={handleSubmit} className={styles.wrapperForm}>

                <img src={logo} alt="rick and morty" className={styles.imgWrapper}/>

                <div className={styles.forma}>
                    <label className={styles.label1}>Email:</label>
                    
                    <input type="text" name="email" value={userData.email} onChange={handleChange} className={styles.inputs}/>
                    {errors.e1 ? (
                        <p className={styles.errors}>{errors.e1}</p>
                    ): errors.e2 ? (
                        <p className={styles.errors}>{errors.e2}</p>
                    ):(
                        <p className={styles.errors}>{errors.e3}</p>
                    )}
                </div>

                <div className={styles.forma}>
                    <label className={styles.label1}>Password:</label>
                    <input type="text" name="password" value={userData.password} onChange={handleChange} className={styles.inputs}/>
                    {errors.p1 ? (
                        <p className={styles.errors}>{errors.p1}</p>
                    ): (
                        <p className={styles.errors}>{errors.p2}</p>
                    )}
                </div>
                <button type="submit" >Login</button>
            </form>
                
    )
};

export default Form;