function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var isString = "Sono Peppe, uno studente e vivo in italia. Mi piace sviluppare software per ambiente Android e Linux. Molti di questi progetti sono opensource!";

function SlowChangeBgColor(Element, rgb_r, rgb_g, rgb_b) {
    document.getElementById(Element).style.backgroundColor = 
    "rgb(" + rgb_r.toString() + "," + rgb_g.toString() + "," + rgb_b.toString() + ")";
}

function SlowChangeColor(Element, color) {
    document.getElementById(Element).style.color = 
    "rgb(" + color.toString() + "," + color.toString() + "," + color.toString() + ")";
}

function ShowById(isID) {
    document.getElementById(isID).style.display = "block";
}

async function waitfor() {

    for (let i = 0; i < 255; i++) {
        SlowChangeColor("title", i, i, i);
        await sleep(5);
    }

    var welcome = "";

    for (let i = 0; i < isString.length; i++) {
        welcome = document.getElementById("wellcome").innerHTML  + isString[i];
        document.getElementById("wellcome").innerHTML = document.getElementById("wellcome").innerHTML + isString[i] + "|";
        await sleep(50);
        document.getElementById("wellcome").innerHTML = welcome;
    }

    // configura
    var color = 0;
    var rgb_r = 0;
    var rgb_g = 0;
    var rgb_b = 0;
    //rgb(15, 76, 100)
    for (let i = 0; i < 255; i++) {
        if (rgb_r < 15)
            rgb_r = i;

        if (rgb_g < 76)
            rgb_g = i;

        if (rgb_b < 100)
            rgb_b = i;

        SlowChangeBgColor("body", rgb_r, rgb_g, rgb_b);
        SlowChangeBgColor("main", i, i, i);
        color = 255 - i;
        SlowChangeColor("wellcome", color, color, color);
        SlowChangeColor("title", color, color, color);
        await sleep(8);
    }

    await sleep(200);
    ShowById("navbar");
    await sleep(200);
    document.getElementById("main-link").style.display = "inline-block";

    var desc = document.getElementsByClassName("mini-box");

    for (let i = 0; i < desc.length; i++) {
        desc[i].classList.remove("hide");
        await sleep(100);
    }

    var load = document.getElementsByClassName("loader-wrapper");
    
    for (let i = 0; i < load.length; i++) {
        load[i].classList.add("hide");
        await sleep(100);
    }

}

waitfor();