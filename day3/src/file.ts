const fs3 = require('fs');
let totalPriorities : number = 0;

function getLetterValue(letter : string){
    if (letter == letter.toUpperCase()){
        return letter.charCodeAt(0) - 38;
    }
    return letter.charCodeAt(0) - 96;
}

function getPriorities(first : string, second : string){
    for (let i = 0; i < first.length; i++){
       if(second.includes(first[i])){
            return getLetterValue(first[i]);
       }
    }
}

function getTotalPriorities(){
    const allFileContents = fs3.readFileSync('input.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        let first = line.substring(0, line.length/2);
        let second = line.substring(line.length/2, line.length);
        totalPriorities += getPriorities(first, second);
    });
    return totalPriorities;
}

console.log(getTotalPriorities());