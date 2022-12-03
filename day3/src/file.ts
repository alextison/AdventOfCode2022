const fs3 = require("fs");
let totalPriorities: number = 0;

function getLetterValue(letter: string) {
  if (letter == letter.toUpperCase()) {
    return letter.charCodeAt(0) - 38;
  }
  return letter.charCodeAt(0) - 96;
}

function getPriorities(first: string, second: string) {
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      return getLetterValue(first[i]);
    }
  }
}

function getTotalPriorities() {
  const allFileContents = fs3.readFileSync("input.txt", "utf-8");
  allFileContents.split(/\r?\n/).forEach((line) => {
    let first = line.substring(0, line.length / 2);
    let second = line.substring(line.length / 2, line.length);
    totalPriorities += getPriorities(first, second);
  });
  return totalPriorities;
}

function getPrioritiesOfGroup(first: string, second: string, third: string) {
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i]) && third.includes(first[i])) {
      return getLetterValue(first[i]);
    }
  }
}

function getPrioritiesOfAllGroups() {
  const allFileContents = fs3.readFileSync("input.txt", "utf-8");
  let first = "";
  let second = "";
  let third = "";
  let place = 0;
  allFileContents.split(/\r?\n/).forEach((line) => {
    if (place == 0) {
      first = line;
      place++;
    } else if (place == 1) {
      second = line;
      place++;
    } else {
      third = line;
      totalPriorities += getPrioritiesOfGroup(first, second, third);
      place = 0;
    }
  });
  return totalPriorities;
}

console.log(getPrioritiesOfAllGroups());

// 2692
// 2444
