const homeScorePara = document.getElementById('home-score');
const guestScorePara= document.getElementById('guest-score');

let homeScore = 0;
let guestScore = 0;

const homeTitleText = document.getElementById('home-title');
const guestTitleText = document.getElementById('guest-title');

function incOneH() {
    homeScore += 1;
    homeScorePara.textContent = homeScore;
    checkLeadingTeam() 
}
function incTwoH() {
    homeScore += 2;
    homeScorePara.textContent = homeScore;
    checkLeadingTeam() 
}
function incThreeH() {
    homeScore += 3;
    homeScorePara.textContent = homeScore;
    checkLeadingTeam() 
}
function incOneA() {
    guestScore += 1;
    guestScorePara.textContent = guestScore;
    checkLeadingTeam() 
}
function incTwoA() {
    guestScore += 2;
    guestScorePara.textContent = guestScore;
    checkLeadingTeam() 
}
function incThreeA() {
    guestScore += 3;
    guestScorePara.textContent = guestScore;
    checkLeadingTeam() 
}

function checkLeadingTeam() {
    if (homeScore > guestScore){
        homeTitleText.textContent = "HOME 🔥";
        guestTitleText.textContent = "GUEST";
    }
    else if(guestScore > homeScore){
        guestTitleText.textContent = "GUEST 🔥";
        homeTitleText.textContent = "HOME";
    }
    else {
        homeTitleText.textContent = "HOME";
        guestTitleText.textContent = "GUEST";
    }
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeScorePara.textContent = homeScore;
    guestScorePara.textContent = guestScore;
    checkLeadingTeam() 
}