ap.src += location.search;
forest.href += location.search; //Change
var queryString = new URLSearchParams(location.search);

function attack(){
    minAPNeeded = 8;
    let isMinibossDead = false;
    if (ap < minAPNeeded){
        isMinibossDead = true;
        battleText.innerHTML = "You defeated the goon"
        options.innerHTML = `<a href='forest.html?${queryString}'><button>Go back</button></a>` //Change
    }
    else {
        battleText.innerHTML = "You don't have enough AP to defeat the goon. Find more cats."
    }
}