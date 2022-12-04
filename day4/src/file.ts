const fs4 = require("fs");
let totalContain: number = 0;

function checkIfContains(
  number1: number,
  number2: number,
  range1: number,
  range2: number
) {
  if (
    number1 >= range1 &&
    number1 <= range2 &&
    number2 >= range1 &&
    number2 <= range2
  ) {
    return true;
  }
  return false;
}

function isContain(first: string, second: string) {
  let firstB = +first.split("-")[0];
  let firstE = +first.split("-")[1];
  let secondB = +second.split("-")[0];
  let secondE = +second.split("-")[1];
  if (
    checkIfContains(firstB, firstE, secondB, secondE) ||
    checkIfContains(secondB, secondE, firstB, firstE)
  ) {
    return true;
  }
  return false;
}

function getTotalContains() {
  const allFileContents = fs4.readFileSync("input.txt", "utf-8");
  allFileContents.split(/\r?\n/).forEach((line) => {
    let first = line.split(",")[0];
    let second = line.split(",")[1];
    if (isContain(first, second)) {
      totalContain++;
    }
  });
  return totalContain;
}

console.log(getTotalContains());
