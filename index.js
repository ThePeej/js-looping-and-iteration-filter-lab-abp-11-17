// Code your solution in this file
function findMatching(drivers, string) {
  const matchingDrivers = drivers.filter(function(name) {return name.toUpperCase() === string.toUpperCase()})
  console.log(matchingDrivers)
  return matchingDrivers
}

function fuzzyMatch(drivers, string) {

}

/*
function matchName(drivers, string) {
  const matchingDrivers = drivers.filter(function(drivers.name) {return drivers.name === string})
  console.log(matchingDrivers)
  return matchingDrivers
}
*/
