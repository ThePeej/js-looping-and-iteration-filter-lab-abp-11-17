// Code your solution in this file
function findMatching(drivers, string) {
  const matchingDrivers = drivers.filter(function(name) {return name.toUpperCase() === string.toUpperCase()})
  ///console.log(matchingDrivers)
  return matchingDrivers
}

function fuzzyMatch(drivers, string) {
  let driverFuzzyMatch = []

  /*
  console.log(drivers)
  console.log(drivers[0])
  console.log(drivers[0][0])
  debugger;
  */

  for (const name of drivers) {
    console.log(name[0])
    if (name[1] === string) {
      driverFuzzyMatch.push(user)
    }
  }
  console.log(driverFuzzyMatch)
  debugger;
  return driverFuzzyMatch
}


function matchName(drivers, string) {
  const driverMatch = []
  for (const user of drivers) {
    if (user.name === string) {
      driverMatch.push(user)
    }
  }
  ///console.log(driverMatch)
  ///debugger;
  return driverMatch
}
