const year = 2000;

let reminder = year % 4;
let reminder1 = year % 100;
let reminder2 = year % 400;


if (reminder==0){
    console.log("its leap Year");
}
else if (reminder1==0){
    console.log("its leap Year");
}
else if(reminder2==0){
    console.log("its leap Year");
}
else{
    console.log("its not leap Year");
}

