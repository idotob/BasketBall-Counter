let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let home = 0;
let guest = 0;

function plusOneHome () {
    home += 1;
    homeEl.textContent = home;
}

function plusTwoHome () {
    home += 2;
    homeEl.textContent = home;
}

function plusThreeHome () {
    home += 3;
    homeEl.textContent = home;
}

function plusOneGuest () {
    guest += 1;
    guestEl.textContent = guest;
}

function plusTwoGuest () {
    guest += 2;
    guestEl.textContent = guest;
}

function plusThreeGuest () {
    guest += 3;
    guestEl.textContent = guest;
}