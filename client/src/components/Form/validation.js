const validation = (data) => {
 const errors = {};

 if(!data.email) {
    errors.e1 = "El email no puede estar vacío";
 } else if (!data.email.includes("@")) {
    errors.e2 = "El email no es válido"
 } else if (data.email.length > 35) {
    errors.e3 = "El email no puede tener más de 35 caracteres";
 } 

 if (!/.*\d+.*/.test(data.password)){
   errors.p1 = "La contraseña debe tener al menos un numero";
 } else if (data.password.length < 6 || data.password.length > 10){
   errors.p2 = "La contraseña debe tener entre 6 y 10 caracteres";
 }
 return errors
};

export default validation;