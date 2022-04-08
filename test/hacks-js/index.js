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

    var temp1 = 0;

    for (let i = 0; i < 5; ++i) {
        temp1 = 5 - i;
        document.getElementById("main").innerHTML = "Fatto! La finestra verra' chiusa tra " + temp1.toString() + " secondi";
        await sleep(1000);
    }
    
    await sleep(500);
    // chiudi la finestra
    window.open('','_self').close();
}

waitfor();

