


function encriptador(){
    var texto = document.getElementById('texto').value
    document.getElementById('texto').value="";
    var textoencriptado="";
    var etiqueta= document.getElementById('lb-mensaje');
    ocultarElementos()
    alert(texto);
    var caracter=""
    for(var cont =0;cont<texto.length;cont++){
    
    caracter=texto.charAt(cont)
    textoencriptado+=enlazarcodigo(caracter)
    }
      var t1=document.getElementById('resultado')
      //limpiamos el campo de texto
      document.getElementById('resultado').value="";
      t1.value=textoencriptado;
      document.getElementById("btn-copiar").style.display='block';
    
     /* var contenedor= document.getElementsByClassName('area-resultado')
     contenedor.innerHTML=t1 */
     texto.value="";
    }
    function ocultarElementos(){
    
    document.getElementById("resultado").style.display='block';
    document.getElementById("imgpersona").style.display='none'
    
    }
    function enlazarcodigo(caracter){
    
    switch(caracter){
        case 'e':
            caracter='enter'
            break;
            case 'i':
                caracter='imes'
                break;
    case 'a':
    caracter='ai'
    break;
    case 'o':
    caracter='ober'
    break;
    case 'u':
        caracter='ufat'
        break;
    }
    
    return caracter;
    
    }
    
    function capturar_Texto(){
    
    
    const textoencriptado=document.getElementById('resultado').value
    
    desemcriptar(textoencriptado)
    
    }
    //gaitober
    function desemcriptar(cadena){


        let btn_copy = document.getElementById('btn-copiar');
        btn_copy.textContent="Copiar ";
        btn_copy.style.backgroundColor='#F2F4F4';
        document.getElementById('resultado').value='';
        document.getElementById('texto').value
    //var palabradesincriptada="";
    //creamos un array con los codigos para recorrer y comparar
    var pos=-1;
    var codigos=['ober','enter','ai','ufat','imes'];
    //recorremos el array y comparamos la cadena de texto es igual alguno de los elementos del array
    codigos.forEach(function(elemento){
    
    pos=cadena.search(elemento);
    if(elemento!=-1){
    if(elemento=='ai'){
    cadena=cadena.replaceAll('ai','a')// debemos asignarla asi misma u a otra variable el resultado a replace para que se vea en cambio 
    }
    
    
    if(elemento=='ober'){
    
    cadena=cadena.replaceAll("ober", 'o');
    
    }
    
    if(elemento=='enter'){
    
    cadena=cadena.replaceAll('enter','e')
    
    
    }
    if(elemento=='ufat'){
    
        cadena=cadena.replaceAll('ufat','u')
        
        
        }
    
    
        if(elemento=='imes'){
    
           cadena= cadena.replaceAll('imes','i')
            
            
            }
    
    }
    
    
    });
    
    
    // simplemente agregamos a nuestro input el texto desencriptado
    document.getElementById('resultado').value=cadena
    
    }
    
    //funcion para el copiado del texto
    function copiarTexto(){
    let btn_copy = document.getElementById('btn-copiar');
       btn_copy.textContent="Copiado ";
       btn_copy.style.backgroundColor='#450';
        // Copiado del texto 
       // funcion hace uso  de excommand para copiar texto 
 let  textocopiado= document.getElementById("resultado");
 var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = textocopiado.value;
    document.body.appendChild(elementoTemporal);

    elementoTemporal.select();
    document.execCommand("copy")

    try {
        // Obtener el elemento de resultado y establecer el texto copiado
        var resultadoElemento = document.getElementById('resultado');
        resultadoElemento.textContent = textocopiado.value;
  
        console.log("Texto copiado al portapapeles: " + textocopiado.value);
      } catch (err) {
        console.error('Error al copiar al portapapeles: ', err);
      } finally {
        // Eliminar el elemento temporal
        document.body.removeChild(elementoTemporal);
      }
    
    
    }