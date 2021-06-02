var marks=[45,93,54,55,21,89,12];
var max=marks[0];
for(var i=0; i <=marks.length; i++){
   var element = marks[i];
   if(element >max){
       max =element;
   }

}
console.log("heigst number",max);