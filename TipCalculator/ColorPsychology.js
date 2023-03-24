const createChild = () => {
    const div = document.createElement("div"); //creates an element to the document
    div.classList.add("myChildDiv") //add "myChildDiv" as a class of this div
 
    const myDiv = document.getElementById("myDiv") //then I select the exact place where I want place this new element. 
    myDiv.appendChild(div) //and append to the element selected
}

 // text to color mapper
 const colorMap = {
    Excitement: "cpRed",
    Strength: "cpRed",
    Love: "cpRed",
    Energy: "cpRed",
    Confidence: "cpOrange",
    Success: "cpOrange",
    Bravery: "cpOrange",
    Sociability: "cpOrange",
    Creativity: "cpYellow",
    Happiness: "cpYellow",
    Warmth: "cpYellow",
    Cheer: "cpYellow",
    Nature: "cpGreen",
    Healing: "cpGreen",
    Freshness: "cpGreen",
    Quality: "cpGreen",
    Trust: "cpBlue",
    Peace: "cpBlue",
    Loyalty: "cpBlue",
    Competence: "cpBlue",
    Compassion: "cpPink",
    Sincetity: "cpPink",
    Sweet: "cpPink",
    Royalty: "cpPurple",
    Luxury: "cpPurple",
    Spirituality: "cpPurple",
    Ambition: "cpPurple",
    Dependable: "cpBrown",
    Rugged: "cpBrown",
    Trustworthy: "cpBrown",
    Simple: "cpBrown",
    Formality: "cpBlack",
    Dramatic: "cpBlack",
    Sophistication: "cpBlack",
    Security: "cpBlack",
    Clean: "cpWhite",
    Simplicity: "cpWhite",
    Innocence: "cpWhite",
    Honest: "cpWhite"
}

