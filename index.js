// Code your solution in this file
function findMatching(drivers, string) {
  const matchingDrivers = drivers.filter(function(name) {return name.toUpperCase() === string.toUpperCase()})
  console.log(matchingDrivers)
  return matchingDrivers
}

function fuzzyMatch(drivers, string) {

}


function matchName(drivers, string) {
  const driverName = []
  for (const user of drivers) {
    driverName.push(user.name)
    console.log(driverName)
  }
  debugger;
  const driversName = drivers.name
  debugger;
  const matchingDrivers = driversName.filter(function(name) {return name === string})
  console.log(matchingDrivers)
  debugger;
  return matchingDrivers
}
