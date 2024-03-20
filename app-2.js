let nuevaCadena="";




function encriptaTexto(){
 
    let elemento=document.querySelector("textarea");
    nuevaCadena="";
       
    console.log(elemento.value);
    
    for (var i = 0; i < elemento.value.length; i++){
        
        if (elemento.value.charAt(i)=="a"){
            nuevaCadena=nuevaCadena+"ai";
            
        }else{
            if (elemento.value.charAt(i)=="e"){
                nuevaCadena=nuevaCadena+"enter";
            
            }else{
                if (elemento.value.charAt(i)=="i"){
                    nuevaCadena=nuevaCadena+"imes";
            
                }else{
                    if (elemento.value.charAt(i)=="o"){
                        nuevaCadena=nuevaCadena+"ober";
            
                    }else{
                        if (elemento.value.charAt(i)=="u"){
                            nuevaCadena=nuevaCadena+"ufat";
            
                        }else{
                            
                            nuevaCadena=nuevaCadena+elemento.value.charAt(i);
                         
                        }
                    }
                }
            }
        }
    
    }

    elemento.value=`Texto Normal: ${elemento.value} \n \nTexto encriptado: ${nuevaCadena}`;
    console.log(nuevaCadena);
    

}

function desEncriptaTexto(){

    let elemento=document.querySelector("textarea");

    nuevaCadena=elemento.value;

    nuevaCadena=nuevaCadena.replaceAll("ai","a");
    nuevaCadena=nuevaCadena.replaceAll("enter","e");
    nuevaCadena=nuevaCadena.replaceAll("imes","i");
    nuevaCadena=nuevaCadena.replaceAll("ober","o");
    nuevaCadena=nuevaCadena.replaceAll("ufat","u");
    
       
    console.log(elemento.value);

    elemento.value=`Texto encriptado: ${elemento.value} \n \nTexto desencriptado: ${nuevaCadena}`;
    
    console.log(nuevaCadena);


}

function copiarC(){

    let elemento=document.querySelector("textarea");
    
    console.log(elemento.value );

    navigator.clipboard.writeText(elemento.value)
    .then(() => {
      console.log('Texto copiado al portapapeles')
    })
    .catch(err => {
      console.error('Error al copiar al portapapeles:', err)
    })
   
}
