
var student = {id:10, phone:1628557901, name:"shuvo"};

var totech = {id:11, phone:1708448484, name:"real"}
student["phone"]=10000;
var phoneNumber1 =student["phone"];
var phoneNumber = student.phone;
var phoneNumber2 = "phone";
student.passion="web development";
var mobileNumber = student[phoneNumber2];

// object update object
totech.phone=123456;
student["phone"]=10000;
student.profation="webdeveloper";


console.log(student);
console.log(totech);