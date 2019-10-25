// Purpose: This file contains the fetch request to get data from the API

// Fetch call to JSON server
const getParksData = () => {
return fetch("http://localhost:8088/parks")
.then(parks => parks.json())
}
