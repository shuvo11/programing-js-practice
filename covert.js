function inchTofeet(inch){

    var feet = inch/12;
    return feet;
}
var land = inchTofeet(48);
var office = inchTofeet(2040);
console.log(land);
console.log(office);