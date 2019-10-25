// Purpose: This file contains everything relating to populating the results on the DOM


// A reference to the parks container element
const parksContainer = document.querySelector("#parks-container")

// For Each loop to generate HTML for each park and then populate to DOM    
const loopThroughParks = parsedParks => {
parsedParks.forEach(park => {
    let parkname = "name not listed"
    let parkstate = "state unknown"
    let parkvisited = ""
    // console.table(parsedParks)
    if (park.name) {
        parkname = park.name
    }
    if (park.state) {
        parkstate = park.state

    if (park.visited) {
        parkvisited = "visited"
    } else {
        parkvisited = "notvisited"
    }
    
        const parksHTML = parksHTMLGenerator(parkname, parkstate, parkvisited)
        
        addParksToDom(parksHTML)
    }}
    )
  }


// Factory function to generate HTML for each national park
const parksHTMLGenerator = (parkname, parkstate, parkvisited) => {
    let newArticleEl = document.createElement("article")

    newArticleEl.className = `${parkvisited}`

    newArticleEl.innerHTML = `
    <h3>${parkname}</h3>
    <p>${parkstate}</p>
    `
    // console.log(newArticleEl)
    return newArticleEl
}
// test: console.log(parksHTMLGenerator("awesome park", "FL"))


// Function to populate DOM with parks HTML
const addParksToDom = (newhtml) => {
    parksContainer.appendChild(newhtml)
}