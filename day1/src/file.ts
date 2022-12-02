const fs = require('fs');
let mostCalories : number = 0;
let topCalories : number[] = [0,0,0];
let totaltopCalories : number = 0;
let currentElfCalories : number = 0;

function getMostCalories(){
    const allFileContents = fs.readFileSync('input.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
    if (line === ''){
        if (currentElfCalories > mostCalories){
        mostCalories = currentElfCalories;
        }
        currentElfCalories = 0;
    } else {
        currentElfCalories += +line;
    } 
    });
    
    return mostCalories;
}

function gettopCalories(){
    const allFileContents = fs.readFileSync('input.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
    if (line === ''){
        if (currentElfCalories > topCalories[0]){
            topCalories[2] = topCalories[1];
            topCalories[1] = topCalories[0];
            topCalories[0] = currentElfCalories;
        } else if (currentElfCalories > topCalories[1]){
            topCalories[2] = topCalories[1];
            topCalories[1] = currentElfCalories;
        } else if (currentElfCalories > topCalories[2]){
            topCalories[2] = currentElfCalories;
        }
        currentElfCalories = 0;
    } else {
        currentElfCalories += +line;
    } 
    });

    let totaltopCalories = +topCalories[0] + +topCalories[1] + +topCalories[2];
    return totaltopCalories;
}

console.log(gettopCalories());