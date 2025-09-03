function decrementMinibossHP() {
    if (minibossHP > 0) {
        minibossHP--;
        hpText.innerHTML = `The enemy has ${minibossHP} hp. Click on him to attack.`;
    } else{
        battleText.innerHTML = "You defeated the catnapper's goon! You can now proceed to the next area.";
        hpText.innerHTML = "";
        
        const overworld1button = document.getElementById("overworld");
        overworld1button.style.visibility = "hidden";

        const overworld2button = document.getElementById("overrworld2");
        overworld2button.style.visibility = "visible";

        const minibossImage = document.getElementById("miniboss-closeup-position");
        minibossImage.style.visibility = "hidden";
    }

}