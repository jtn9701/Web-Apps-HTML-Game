function decrementBossHP() {
    if (bossHP > 0) {
        bossHP--;
        hpText.innerHTML = `The enemy has ${bossHP} hp. Click on him to attack.`;
    } 
    
    if (bossHP <= 0) {
        battleText.innerHTML = "You defeated the Great Hound of Shadows!";
        hpText.innerHTML = "";

        const bossImage = document.getElementById("boss-closeup-position");
        bossImage.style.visibility = "hidden";
        
        //Show ending box
        //document.getElementById("endingBox").style.display = "block";
        const endingText = document.getElementById("endingText");
        const endingBox = document.getElementById("endingBox");
        endingBox.style.display = "block";

        // Branch endings
        if (ap === 21 && queryString.get("evil") !== "1") {
            endingText.innerHTML = "True Ending: With all your cats sage and your heart pure, the Great Hound Falls.<br>" +
            "Your cats gather around you in celebration of saving your friend. Peace returns to the land.";
        } 
        else if (queryString.get("evil") === "1") {
            endingText.innerHTML = "Evil Ending: The Great Hound falls under your might. But your cats, terrified of what you have become, scatter into the darkness.<br>" +
            "You stand alone in the cold shadow of your selfish choice.";
        } 
        else {
            endingText.innerHTML = "Neutral ending: You defeated the Great Hound, but not without all your cats. This victory feels hollow.<br>" +
            "Your journey is incomplete.";
        }
    }
}