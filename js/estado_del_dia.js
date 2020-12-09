/* const ESTADO =prompt('¿Como esta el dia?');
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
 */

const ESTADO =prompt('¿Como esta el dia?');

switch (ESTADO) {
    case 'lluvioso':
        console.log(`El dia esta ${ESTADO} por aqui`);
        break;
    case 'soleado':
        console.log(`ÈL dia esta ${ESTADO} por aqui`);
        break;
    case 'nevado':
        console.log(`El dia esta ${ESTADO} por aqui`);
        break;
    case 'nublado':
        console.log(`El dia esta ${ESTADO} por aqui`);
        break;
    default:
        let descripcion =prompt('Ingrese la descripcion del dia');
        console.log(`El dia esta ${descripcion} por aqui`);
        break;
}