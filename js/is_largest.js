console.log('is largest');
const NUMBER_ONE = parseInt(prompt('¿Dame un numero?'));
const NUMBER_TWO = parseInt(prompt('¿Dame otro numero?'));

if(NUMBER_ONE > NUMBER_TWO){
    //
    console.log(`el numero mayor es ${NUMBER_ONE}`);
}else if(NUMBER_ONE === NUMBER_TWO){
    console.log(`el numero ${NUMBER_ONE} es igual al numero ${NUMBER_TWO}`);
}else{
    //
    console.log(`el numero mayor es ${NUMBER_TWO}`);
}