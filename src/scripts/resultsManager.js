



// A reference to the parks container element
const parksContainer = document.querySelector("#parks-container")

// For Each loop to generate HTML for each park and then populate to DOM    
const loopThroughParks = parsedParks => {
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
  }


// Factory function to generate HTML for each national park
const parksHTMLGenerator = (parkname, parkstate) => {
    let newArticleEl = document.createElement("article")
    newArticleEl.innerHTML = `
        <h3>${parkname}</h3>
        <p>${parkstate}</p>
    `
    return newArticleEl
}
// test: console.log(parksHTMLGenerator("awesome park", "FL"))


// Function to populate DOM with parks HTML
const addParksToDom = (newhtml) => {
    parksContainer.appendChild(newhtml)
}