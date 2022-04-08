function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var isString = "Attendi mentre hackero il tuo dispositivo";

async function waitfor() {
    for (let i = 0; i < isString.length; i++) {
        document.getElementById("main").innerHTML = document.getElementById("main").innerHTML + isString[i];
        await sleep(100);
    }

    var temp = document.getElementById("main").innerHTML;
    var counter = 0;

    while (counter < 4) {
        for (let i = 0; i < 3; i++) {
            document.getElementById("main").innerHTML = document.getElementById("main").innerHTML + '.';
            await sleep(400);
        }
        counter++;
        document.getElementById("main").innerHTML = temp;
    }

    document.getElementById("main").innerHTML = "Fatto!";
}

waitfor();

