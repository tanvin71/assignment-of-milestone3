         /** First function solving */ 

 function feetToMile(feet){
     var mile= feet / 5280;
     return mile;
 }   
  
 var check1 = feetToMile (1000);
 console.log(check1);

 var check2 = feetToMile (15840);
 console.log (check2);

 var check3 = feetToMile (4500);
 console.log (check3);


          /** Second function solving */ 

function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var totalWoodAmount = woodCalculator (5, 2, 2);
console.log(totalWoodAmount);





        /** Third function solving */ 

function brickCalculator(storied) {
    if (storied <= 10){
        var height = 15;
        const bricks= 1000;
        var totalBricks = storied * height * bricks;
        return totalBricks;
        
    }
    
    else if (storied > 10 && storied <= 20){
        var height1 = 12;
        const bricks= 1000;
        var moreBricks = storied * height1 * bricks;
        var totalBricks1 = totalBricks + moreBricks;
        return totalBricks1;

    }
    else (storied > 20) {
        var height2 = 10;
        var fewMoreBricks = storied * height2 * bricks;
        var totalBricks2 = totalBricks + totalBricks1 + fewMoreBricks;
        return totalBricks2;
    }
        
}

var result = brickCalculator(15);
console.log(result);



       /** Fourth function solving */
var  friendsName = ["Jahed", "Fahim", "Rahim", "Raju","Azad"];
var min = friendsName[1];
function tinyFriend(size) {
    for (var i = 1; i < size.length; i++) {
        var element = friendsName[i];
        if(element > min){
            min = element;
        }
    }
    return tinyFriend;
}
var result = tinyFriend(friendsName);

console.log("Tiny friend is :", min);
