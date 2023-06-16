
const misc = document.getElementById("misc");

const title = document.createElement("h1");
title.innerText = "Social Contacts";
misc.append(title);

/**
 * Create div for social button.
 * Append in misc.
 */
const box = document.createElement("div");
box.id = "social-ref";
box.classList.add("google-font");
misc.append(box);

const social = [
    /** [ text ], [ css ] **/
    ["@Peppe289", "Telegram"],
    ["@gsperanza204", "Instagram"],
    ["@Peppe289", "Github"],
    ["Linkedin", "Linkedin"],
    ["r/Peppe289", "Reddit"],
    ["@peppe2892", "Twitter"],
];

let link = [
    'https://t.me/peppe289',                                    // telegram: 0
    'https://www.instagram.com/gsperanza204/',                  // instagram: 1
    'https://github.com/Peppe289',                              // github: 2
    'https://www.linkedin.com/in/giuseppe-speranza-88b5ba22a/', // linkedin: 3
    'https://www.reddit.com/user/Peppe289',                     // reddit: 4
    'https://twitter.com/Peppe2892',                            // twitter: 5
];

function createlink(click, text, color) {
    var parent = "parent.location='" + click + "'";
    return '<div class="social-link select-none ' + color + '" onclick="' + parent + '">' + text + '</div>';
}

for (var i = 0; i < social.length; ++i) {
    box.innerHTML += createlink(link[i], social[i][0], social[i][1]);
}
