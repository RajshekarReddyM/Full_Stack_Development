let age = [20,78,4,13,34,56,19];
let adult = age.filter(creat);

adult.forEach(print);
function creat(ele){
    return ele>=18;
    
}
function print(ele){
    console.log(ele);
}
