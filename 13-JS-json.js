/* 
    =====================
    JavaScript json
    =====================
*/

var text = '{ "fruits" : [' +
'{ "name":"Banana" , "color":"yellow" },' +
'{ "name":"Orange" , "color":"Orange" },' +
'{ "name":"Apple" , "color":"red" } ]}';

var obj = JSON.parse(text);
console.log(obj.fruits[2].name + " is " + obj.fruits[2].color);