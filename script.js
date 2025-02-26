const choice1Button = document.getElementById('choice1button');
const choice2Button = document.getElementById('choice2button');
const choice3Button = document.getElementById('choice3button');
const vnImage = document.getElementById('story-image');
const vnText = document.getElementById("story-text");
const secretMessage = document.getElementById("secretMessage");

const backMusic = new Audio("horror-background-tension-254885.mp3"); // add background music while playing the game
backMusic.loop = true;

window.addEventListener("click", () => {
    backMusic.play().catch(error => console.log("Autoplay prevented:", error));
}, {once: true });

let playerName = prompt("What is your name, adventurer?");

function startStory() { // the first thing you see in the story, images, and text
    vnText.textContent = "You wake up in an abandoned building. Your limbs feel weak and sluggish. Tape covers your mouth so you’re unable to scream. Rope binds your arms and legs to a chair.";
    vnImage.src = "https://images.pexels.com/photos/158229/lost-places-pforphoto-leave-factory-158229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    choice1Button.textContent = "Scream for help."; // choice 1
    choice2Button.textContent = "Stay silent."; // choice 2
    
    choice1Button.onclick = tapeRip; // both choices lead to one event
    choice2Button.onclick = tapeRip;
    hideButton(); // hides the third button  with the hideButton function
}

function tapeRip() { // second event
    vnText.textContent = "The masked figure approaches you carefully. They rip the tape off your mouth, leaving a red, stinging pain on your lips. “Agh!” You yelp at the sudden pain."
    vnImage.src = "https://ae01.alicdn.com/kf/S3dc8c54e64c9454a9ee624d206c31974T.jpg_640x640q90.jpg";
    choice1Button.textContent = "Who are you?";
    choice2Button.textContent = "What do you want from me?";
    choice3Button.textContent = "Your mask is so ugly!";
    showButton(); // allows the third option to show back up
    choice1Button.onclick = startRomance;
    choice2Button.onclick = playGame;
    choice3Button.onclick = instantDeath;
}

function startRomance() { // beginning of the romancing option
    vnText.textContent = "'You can call me Fish.' The fish man says."
    choice1Button.textContent = "I like that name."
    choice2Button.textContent = "I like your mask, Fish."
    
    choice1Button.onclick = compliment;
    choice2Button.onclick = instantDeath; // instantDeath is used multiple times

    hideButton();
}

function compliment() {
    vnText.textContent = "'R-Really? You like my name? No one's ever said that to me before...' Fish blushes underneath his mask and giggles like a school girl."
    choice1Button.textContent = "It's a lovely name, really. And, honestly, you seem like a lovely person."
    choice2Button.textContent = "Yes. Can you free me now?"

    choice1Button.onclick = romancepls;
    choice2Button.onclick = instantDeath;
}

function romancepls() {
    vnText.textContent = "'Aw shucks, you're too nice. I kind of feel bad for kidnapping you. Do you still want to play a game with me? That's what the original purpose of this was...'"
    choice1Button.textContent = "Um, if possible, I'd like to abstain from playing the game."
    choice2Button.textContent = "Sure, I'll play."

    choice1Button.onclick = fishyromance;
    choice2Button.onclick = playGame;
}

function playGame() {
    vnText.textContent = "I want to play a game of Rock, Paper, Scissors with you, best of 1. Ready?"
    choice1Button.textContent = "Fine."
    choice2Button.textContent = "H-Hell no!!"
    hideButton();
    choice1Button.onclick = scissors;
    choice2Button.onclick = instantDeath;
}

function scissors() {
    vnText.textContent = "Rock, Paper, Scissors, Shoot!"
    vnImage.src = "https://facts.net/wp-content/uploads/2020/11/hand-2704013_1280-768x511.jpg"
    choice1Button.textContent = "Rock!"
    choice2Button.textContent = "Paper!"
    choice3Button.textContent = "Scissors!"
    showButton();
    choice1Button.onclick = instantDeath;
    choice2Button.onclick = instantDeath;
    choice3Button.onclick = winnerWinner;
}

function winnerWinner() {
    vnText.textContent = "'Hm. We both played scissors, huh? Congrats! If you had played rock, I would have killed you for winning, and if you had played paper, I would have killed you for losing. Since you were neither the winner nor the loser, I'll let you live.'"
    vnImage.src = "https://media.istockphoto.com/photos/male-hand-making-the-gesture-of-scissors-on-white-background-picture-id184873330?k=6&m=184873330&s=612x612&w=0&h=3_nwoeRvNesUncGvMn2FzcHR5XeOVZIMQdu0DQkz6Mw="
    choice1Button.textContent = "Hallelujah!"
    choice2Button.textContent = "Stay silent and afraid."
    hideButton();
    choice1Button.onclick = wellDone;
    choice2Button.onclick = wellDone;
}

function hideButton() { // function to hide the third choice which is the only unnecessary one
    choice3Button.style.display = "none";
}

function showButton() { // function to let the third choice show back up when necessary
    choice3Button.style.display = "inline-block";
}

function wellDone() {
    vnText.textContent = "'You're free to leave, thanks for playing with me.' The fish man unties you and you leave, traumatized and deeply disturbed this event."
    vnImage.src = "https://ae01.alicdn.com/kf/S3dc8c54e64c9454a9ee624d206c31974T.jpg_640x640q90.jpg";
    vnImage.addEventListener("mouseover", () => {
        vnImage.src = "https://ae01.alicdn.com/kf/H00b31aca4fd340c2bfcea58a819421eb3.jpg";
    })

    vnImage.addEventListener("mouseout", () => {
        vnImage.src = "https://ae01.alicdn.com/kf/S3dc8c54e64c9454a9ee624d206c31974T.jpg_640x640q90.jpg";
    })

    choice1Button.textContent = "You Win!"
    choice2Button.textContent = "You Win!"
}

function fishyromance() {
    vnText.textContent = "'Oh... Ok that's fine, you seem like a good person. You even liked my name. I'll let you go.' Fish unties your arms and legs from the chair, slowly backing away. You rise from the chair, but instead of fleeing, you approach Fish. 'I think, I think I love you, Fish.' You tell him. 'I love you too...' And you lived happily ever after, kidnapping people and making them play games with you."
    vnImage.src = "https://live.staticflickr.com/65535/51340222278_ee4a97d5c6_b.jpg"

    choice1Button.style.display = "none";
    choice2Button.style.display = "none";

}

document.addEventListener("keydown", function(event) { // gives key binds for the choices
    if (event.key === "l" || event.key === "L") { // press L
        secretMessage.style.display = "block"; // shows secret message
    }
});

function instantDeath() {
    vnText.textContent = "The masked killer pulls out a giant rubber fish from seemingly out of nowhere. Before you can react, he swings the fish at your head like a medieval flail. The repeated hits to the head make your vision blur and the only sound that can be heard in the decrepit room is the sound of wet flopping noises. With one final blow, blackout, killed by a rubber fish wielding lunatic. Game Over.";
    vnImage.src = "https://m.media-amazon.com/images/I/611aV2+qnRL._AC_UF1000,1000_QL80_.jpg";

    choice1Button.style.display = "none";
    choice2Button.style.display = "none";
    choice3Button.style.display = "none";
}
startStory(); // initializes the game


