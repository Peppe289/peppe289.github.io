
const misc = document.getElementById("misc");

/**
 * Create div for social button.
 * Append in misc.
 */
const box = document.createElement("div");
box.id = "social-ref";
box.classList.add("google-font");
misc.append(box);

const social =
    [["@Peppe289" /* 0 */, "@gsperanza204"/* 1 */, "@Peppe289" /* 2 */, "Linkedin" /* 3 */, "r/Peppe289" /* 4 */, "@peppe2892" /* 5 */],
    ["Telegram" /* 0 */, "Instagram" /* 1 */, "Github"/* 2 */, "Linkedin" /* 3 */, "Reddit" /* 4 */, "Twitter" /* 5 */]];

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

for (var i = 0; i < social[0].length; ++i) {
    box.innerHTML += createlink(link[i], social[0][i], social[1][i]);
}
