// Your code here

// mapToNegativize returns an array with all values made negative
function mapToNegativize(sourceArray) {
  return sourceArray.map((n) => n * -1);
}

// mapToNoChange returns an array with the original values
function mapToNoChange(sourceArray) {
  return sourceArray.map((n) => n);
}

// mapToDouble returns an array with the original values multiplied by 2
function mapToDouble(sourceArray) {
  return sourceArray.map((n) => n * 2);
}

// mapToSquare returns an array with the original values squared
function reduceToTotal(sourceArray, startingPoint) {
  return sourceArray.reduce((total, amount) => total + amount, startingPoint);
}

function reduceToTotal(sourceArray, startingPoint) {
  return sourceArray.reduce((total, amount) => total + amount, startingPoint);
}

function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce((total, amount) => total + amount, startingPoint);
  }
  
  function reduceToAllTrue(sourceArray) {
  return sourceArray.reduce((accumaltor, value) => accumaltor && value, true);
}
  
  
  