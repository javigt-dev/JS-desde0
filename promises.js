const userAuthenticated = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth){
        resolve('Usuario autentificado'); //el promise se cumple
    }else{
        reject('Usuario no autentificado'); //el promise no se cumple
    }
});

userAuthenticated
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

/*
en los promises existen 3 valore:
Pending: No se ha cumplido pero tampoco se ha rechazo
Fulfield: Ya se cumplio 
Rejected: Se ha rechazado o no se pudo cumplir
*/