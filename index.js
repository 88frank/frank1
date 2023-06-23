let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")
let count = 0
let score = 0


function homeOne() {
    count ++
    homeScore.textContent = count 
}

function homeTwo() {
    count += 2
    homeScore.textContent = count
}

function homeThree() {
    count += 3
    homeScore.textContent = count
    
}

function awayOne() {
    score ++
    awayScore.textContent = score
}

function awayTwo() {
    score += 2
    awayScore.textContent = score
}

function awayThree() {
    score += 3
    awayScore.textContent = score
}

function reset() {
    score = 0 
    count = 0
    awayScore.textContent = 0
    homeScore.textContent = 0 
}
