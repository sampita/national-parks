console.log("Friday, friday, gotta get down on friday!")

// A reference to the parks container element
const parksContainer = document.querySelector("#parks-container")

// Factory function to generate HTML for each national park
const parksHTMLGenerator = (parkname, parkstate) => {
    let newArticleEl = document.createElement("article")
    newArticleEl.innerHTML = `
        <h3>${parkname}</h3>
        <p>${parkstate}</p>
    `
}
console.log(parksHTMLGenerator)

// Function to populate DOM with parks HTML
const addParksToDom = (newhtml) => {
    parksContainer.appendChild(newhtml)
}

// Fetch call to JSON server
fetch("http://localhost:8088/parks")
.then(parks => parks.json())
.then(parsedParks => {
    parsedParks.forEach(park => {
        console.table(parsedParks)
        if (park.name) {
            let parkname = park.name
        }
        else {
            parkname = "name not listed"
        }
        if (park.state) {
            let parkstate = park.state
        }
        else {
            parkstate = "state unknown"
        }
    // For Each loop to generate HTML for each park and then populate to DOM    
            const parksHTML = parksHTMLGenerator(park)
            addParksToDom(parksHTML)
        })
    })