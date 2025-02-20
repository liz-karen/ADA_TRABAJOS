/*Ejercicio 5: ¡Despídete de tu perfil! 
Consigna:
¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json. 
Verifica que el archivo existe antes de intentar borrarlo.
 Pista: Usa fs.unlink para eliminar archivos*/

 const fs = require('fs')
 const filePath = './perfil.json'

 if(fs.existsSync(filePath)){
    fs.unlink(filePath, (err)=>{
        if(err){
            throw err
        }else{
            console.log('El archivo ha sido eliminado'); 
        }
    })
}else{
    console.log("El archivo no existe")
}
