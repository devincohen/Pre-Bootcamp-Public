/*
the best location is the one with the shortest distance from each customer to the truck, with the least possible variance. I need to start with a central arbitrary point 
that can be adjusted according to the positions of each customer. Customers can move vertically, then horizontally. Never diagonally. Its not about the map, its just about
the coordinates. I want the least variance vertically and the least variance horizontally possible. rather, the shortest possible for all people on average?

I am finding the average latitude and the average longitude and returning that point. Get all the x and all the y and find the average of each.

*/

//start with customer coordinate array
function locate (coords){
    var xCoords = [];
    var yCoords = [];
    var avgX = 0;
    var avgY = 0;
    //captures all x and y coordinates separately
    for (let i = 0; i < coords.length; i++){
        xCoords.push(coords[i][0]);
        yCoords.push(coords[i][1]);
    }
    //add, then average the x and y. To save space, we do this just in the avgX and Y variables
    for (let i = 0; i<xCoords.length; i++){
        avgX += xCoords[i];
        avgY += yCoords[i];
    }
    
    //changes sum to average by dividing by length
    avgX = avgX/xCoords.length;
    avgY = avgY/yCoords.length;

    //round to nearest integer because we only park at corners.
    avgX = Math.round(avgX);
    avgY = Math.round(avgY);

    console.log("Park at " + avgX + ", "+ avgY);
}


var test = [[1,8],[20,16],[30,1],[1,30],[10,10]];
var test2 = [[1,-8],[20,-16],[-30,1],[1,30],[10,-10]];
var test3 = [[100,0],[50,50],[0,100]];
locate(test3);