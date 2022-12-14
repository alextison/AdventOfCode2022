const fs2 = require("fs");
let totalScore: number = 0;

function roundPoint(o: string, y: string) {
  if (o === "A" && y === "X") {
    return 3;
  } else if (o === "A" && y === "Y") {
    return 6;
  } else if (o === "A" && y === "Z") {
    return 0;
  } else if (o === "B" && y === "X") {
    return 0;
  } else if (o === "B" && y === "Y") {
    return 3;
  } else if (o === "B" && y === "Z") {
    return 6;
  } else if (o === "C" && y === "X") {
    return 6;
  } else if (o === "C" && y === "Y") {
    return 0;
  } else if (o === "C" && y === "Z") {
    return 3;
  }
}

function shapePoint(y: string) {
  if (y === "X") {
    return 1;
  } else if (y === "Y") {
    return 2;
  } else if (y === "Z") {
    return 3;
  }
}

function getScore(o: string, y: string) {
  return roundPoint(o, y) + shapePoint(y);
}

function getTotalScore() {
  const allFileContents = fs2.readFileSync("input.txt", "utf-8");
  allFileContents.split(/\r?\n/).forEach((line) => {
    let opponent = line.split(" ")[0];
    let you = line.split(" ")[1];
    totalScore += getScore(opponent, you);
  });

  return totalScore;
}

function chooseStrategy(o: string, end: string) {
  if (end === "l") {
    if (o === "A") {
      return shapePoint("Z");
    } else if (o === "B") {
      return shapePoint("X");
    } else if (o === "C") {
      return shapePoint("Y");
    }
  } else if (end === "d") {
    if (o === "A") {
      return shapePoint("X");
    } else if (o === "B") {
      return shapePoint("Y");
    } else if (o === "C") {
      return shapePoint("Z");
    }
  } else {
    if (o === "A") {
      return shapePoint("Y");
    } else if (o === "B") {
      return shapePoint("Z");
    } else if (o === "C") {
      return shapePoint("X");
    }
  }
}
function getStrategyScore(o: string, y: string) {
  if (y === "X") {
    return 0 + chooseStrategy(o, "l");
  } else if (y === "Y") {
    return 3 + chooseStrategy(o, "d");
  } else if (y === "Z") {
    return 6 + chooseStrategy(o, "w");
  }
}
function getStrategyTotalScore() {
  const allFileContents = fs2.readFileSync("input.txt", "utf-8");
  allFileContents.split(/\r?\n/).forEach((line) => {
    let opponent = line.split(" ")[0];
    let you = line.split(" ")[1];
    totalScore += getStrategyScore(opponent, you);
  });

  return totalScore;
}

console.log(getStrategyTotalScore());
