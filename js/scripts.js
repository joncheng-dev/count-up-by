// Business Logic
function countUpBy(endNumber, multiplier) {
  let finalSum = multiplier;
  for (let i = multiplier; i < endNumber; i += multiplier) {
    finalSum += multiplier;
  }
  return finalSum;
}

// User Interface Logic
