
var name = [1,2,3,4,5,6,7,3,2,8,11,12];
var uniqueName = [];
for (var i=0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);