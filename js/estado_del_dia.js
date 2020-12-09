const ESTADO =prompt('¿Como esta el dia?');
if(ESTADO =='lluvioso' && ESTADO!=null){

    alert(`El dia esta ${ESTADO} por aqui`);
}else if(ESTADO == 'soleado' && ESTADO!=null){
    alert(`ÈL dia esta ${ESTADO} por aqui`);
}else if(ESTADO == 'nevado' && ESTADO!=null){
    alert(`El dia esta ${ESTADO} por aqui`);

}else if(ESTADO =='nublado' && ESTADO!=null){
    alert(`El dia esta ${ESTADO} por aqui`);
}else{
    let descripcion =prompt('Ingrese la descripcion del dia');
    alert(`El dia esta ${descripcion} por aqui`);
}
