// Code your solution in this file
function findMatching(drivers, string) {
  const filterDrivers = drivers.filter(function(name) {return name.toUpperCase() === string.toUpperCase()})
  console.log(filterDrivers)
  return filterDrivers
}

function fuzzyMatch(drivers, string) {
  
}

function matchName(drivers, string) {
  
}