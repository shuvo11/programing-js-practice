
// var f= 1;
// for (var i= 1; i <=100; i++){

//     var f = f * i;
//     console.log(i,f);

 
// }
// var i=1;
// var f=1;
// while(i<=10){
//     var f= f * i;
//     console.log(i,f);
//     i++;
// }

function factorial(n){

    var i=1;
    var f=1;
    while(i<=n){
    var f= f * i;
    i++;
}
return f;
}
var fact= factorial(10);
console.log(fact);