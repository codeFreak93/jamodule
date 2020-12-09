const ESTADO =prompt('¿Como esta el dia?');
if(ESTADO =='lluvioso' && ESTADO!=null){

    console.log(`El dia esta ${ESTADO} por aqui`);
}else if(ESTADO == 'soleado' && ESTADO!=null){
    console.log(`ÈL dia esta ${ESTADO} por aqui`);
}else if(ESTADO == 'nevado' && ESTADO!=null){
    console.log(`El dia esta ${ESTADO} por aqui`);

}else if(ESTADO =='nublado' && ESTADO!=null){
    console.log(`El dia esta ${ESTADO} por aqui`);
}else{
    let descripcion =prompt('Ingrese la descripcion del dia');
    console.log(`El dia esta ${descripcion} por aqui`);
}
