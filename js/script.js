let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1

document.querySelector("#host-name").innerHTML = "Niurca Quirarte"
document.querySelector("#collaborator-name").innerHTML = "Fahmida Rahman"


// Question 2
// You can also create their own CSS classes in style.css file and use that. 




// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.

var firstNameInput = document.getElementById("first_name");
var lastNameInput = document.getElementById("last_name");

firstNameInput.addEventListener("input", function(event) {
    if (event.target.value.toLowerCase() === 'john') {
        lastNameInput.value = 'Doe';
    } else {
        lastNameInput.value = '';
    }
});

// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.



// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.

// Get references to the password input fields, the alert text, and the Hide Password button
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const passwordAlert = document.getElementById("password-alert");
const hidePasswordButton = document.getElementById("hide-password");

// Add event listeners to both password input fields
passwordInput.addEventListener("input", checkPasswordsMatch);
confirmPasswordInput.addEventListener("input", checkPasswordsMatch);

// Function to check if passwords match
function checkPasswordsMatch() {
    // Get the values of both password input fields
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        // If passwords match, update alert text
        passwordAlert.textContent = "Password Matches";
    } else {
        // If passwords don't match, update alert text
        passwordAlert.textContent = "Password does not match";
    }
}

// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm_password");
    const button = document.getElementById("hide-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        confirmPasswordField.type = "text";
        button.textContent = "Show Password";
    } else {
        passwordField.type = "password";
        confirmPasswordField.type = "password";
        button.textContent = "Hide Password";
    }
}

// Add event listener to Hide Password button
hidePasswordButton.addEventListener("click", togglePasswordVisibility);

// Add event listener to toggle password visibility using 'h' key shortcut
document.addEventListener("keydown", function(event) {
    if (event.key === "h" || event.key === "H") {
        togglePasswordVisibility();
    }
});



//Question 6
var resetButton = document.getElementById("radio-reset-button");

var radioButtons = document.querySelectorAll('input[type="radio"][name="favorite_day"]');

resetButton.addEventListener("click", function() {
    radioButtons.forEach(function(radioButton) {
        radioButton.checked = false;
    });
});


//Question 7 





//Question 8





//Question 9 

