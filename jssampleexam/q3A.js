var  Numbers = {a : 1 ,b:2 , c:3}
var results = 0;
function sumObjectValues(Numbers){ 
    for(let i in Numbers){ 
 if(Numbers.hasOwnProperty(i)){ 
    results += Numbers[i];
 }
      
}}
sumObjectValues(Numbers);