

// Fetch call to JSON server
const getParksData = () => {
return fetch("http://localhost:8088/parks")
.then(parks => parks.json())
}

// let parsedParks = getParksData()