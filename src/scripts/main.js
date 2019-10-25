// console.log("Friday, friday, gotta get down on friday!")

// A reference to the parks container element
const parksContainer = document.querySelector("#parks-container")

// Factory function to generate HTML for each national park
const parksHTMLGenerator = (parkname, parkstate) => {
    let newArticleEl = document.createElement("article")
    newArticleEl.innerHTML = `
        <h3>${parkname}</h3>
        <p>${parkstate}</p>
    `
    return newArticleEl
}
// console.log(parksHTMLGenerator("awesome park", "FL"))

// Function to populate DOM with parks HTML
const addParksToDom = (newhtml) => {
    parksContainer.appendChild(newhtml)
}

// Fetch call to JSON server
fetch("http://localhost:8088/parks")
.then(parks => parks.json())
.then(parsedParks => {
    // For Each loop to generate HTML for each park and then populate to DOM    
    parsedParks.forEach(park => {
        let parkname = "name not listed"
        let parkstate = "state unknown"
        // console.table(parsedParks)
        if (park.name) {
            parkname = park.name
        }
        if (park.state) {
            parkstate = park.state
        
            const parksHTML = parksHTMLGenerator(parkname, parkstate)
            addParksToDom(parksHTML)
        }}
        )
    })