var index_colonne;
var index_righe;
var winner;
var restart = 0;
var errore;
var nextgame = 0;

function restartgame(){
    winner = "NULL";
    index_colonne = "NULL";
    index_righe = "NULL";

    restart++;

    for (var i = 0; i != 9; ++i) {
        ++i;
        let SelectID = "posto-" + i.toString();
        document.getElementById(SelectID).innerHTML = "";
        --i;
    }

    var nascondi = document.getElementsByClassName('open');
    var mostra = document.getElementsByClassName('close');
    for(let i=0; i < nascondi.length; i++){
        nascondi[i].classList.add("hide");
        mostra[i].classList.remove("hide");
    }
    console.log("OPEN");
}

function checkinput() {
    var test = index_colonne;
    var pos = 0;

    if (test != "NULL" && winner != "Tris" && winner != "end") {
        var input = parseInt(test);
        test = index_righe;
        if (test != "NULL") {
            var riga = parseInt(test);
            //sistema l'input con la griglia
            ++input;
            if (riga == 1)
                input = input + 3;
            else if (riga == 2)
                input = input + 6;

            document.getElementById("full-debug").innerHTML = input;

            //controlla se la posizione è già occupata
            let SelectID = "posto-" + input.toString();
            var _checkstatus = document.getElementById(SelectID).innerHTML;
            if (_checkstatus == "X" || _checkstatus == "O") {
                document.getElementById("status").innerHTML = "Errore nell'input";
                errore = 1;
            } else {
                errore = 0;
                document.getElementById("status").innerHTML = "All good";

                document.getElementById(SelectID).innerHTML = "X";

                for (var i = 1; i != 10; i = i + 3)
                {
                    if (document.getElementById("posto-" + i.toString()).innerHTML == "X" || document.getElementById("posto-" + i.toString()).innerHTML == "O") {
                        if (document.getElementById("posto-" + i.toString()).innerHTML == document.getElementById("posto-" + (i+1).toString()).innerHTML) {
                            if (document.getElementById("posto-" + (i+1).toString()).innerHTML == document.getElementById("posto-" + (i+2).toString()).innerHTML) {
                                document.getElementById("status").innerHTML = "Tris";
                            }
                        }
                    }
                }

                for (var i = 1; i != 4; i++)
                {
                    if (document.getElementById("posto-" + i.toString()).innerHTML == "X" || document.getElementById("posto-" + i.toString()).innerHTML == "O") {
                        if (document.getElementById("posto-" + i.toString()).innerHTML == document.getElementById("posto-" + (i+3).toString()).innerHTML) {
                            if (document.getElementById("posto-" + (i+3).toString()).innerHTML == document.getElementById("posto-" + (i+6).toString()).innerHTML) {
                                document.getElementById("status").innerHTML = "Tris";
                            }
                        }
                    }
                }

                if (document.getElementById("posto-1").innerHTML == "X" || document.getElementById("posto-1").innerHTML == "O") {
                    if (document.getElementById("posto-1").innerHTML == document.getElementById("posto-5").innerHTML) {
                        if (document.getElementById("posto-5").innerHTML == document.getElementById("posto-9").innerHTML) {
                            document.getElementById("status").innerHTML = "Tris";
                        }
                    }
                }

                if (document.getElementById("posto-3").innerHTML == "X" || document.getElementById("posto-3").innerHTML == "O") {
                    if (document.getElementById("posto-3").innerHTML == document.getElementById("posto-5").innerHTML) {
                        if (document.getElementById("posto-5").innerHTML == document.getElementById("posto-7").innerHTML) {
                            document.getElementById("status").innerHTML = "Tris";
                        }
                    }
                }

                if (document.getElementById("status").innerHTML == "Tris")
                    nextgame = 1;

                winner = document.getElementById("status").innerHTML;

                var check_counter = 0;
                for (var i = 0; i != 9; ++i) {
                    ++i;
                    let CheckID = "posto-" + i.toString();
                    if (document.getElementById(CheckID).innerHTML == "O" || document.getElementById(CheckID).innerHTML == "X")
                        check_counter++;
                    --i;
                }
                if (check_counter == 9)
                    winner = "end";
                check_counter = 0;
            }
        }
    }

    if (winner == "Tris" || winner == "end") {
        if (nextgame == 0) {
            var nascondi = document.getElementsByClassName('close');
            var mostra = document.getElementsByClassName('open');
            for(let i=0; i < nascondi.length; i++){
                nascondi[i].classList.add("hide");
                mostra[i].classList.remove("hide");
            }
            console.log("OPEN");
        } else {
            var nascondi = document.getElementsByClassName('close');
            var mostra = document.getElementsByClassName('nextgame');
            for(let i=0; i < nascondi.length; i++){
                nascondi[i].classList.add("hide");
                mostra[i].classList.remove("hide");
            }
            console.log("OPEN");
        }
        return;
    } else {
        var nascondi = document.getElementsByClassName('open');
        var mostra = document.getElementsByClassName('close');
        for(let i=0; i < nascondi.length; i++){
            nascondi[i].classList.add("hide");
            mostra[i].classList.remove("hide");
        }
        console.log("OPEN");
    }

    var testing = 0;

    while (true && !errore) {
        var pcMove = Math.floor(Math.random() * 10);
        if (pcMove == 0)
            continue;

        testing++;

        let SelectID = "posto-" + pcMove.toString();

        if (document.getElementById(SelectID).innerHTML != "X"
            && document.getElementById(SelectID).innerHTML != "O") {
                document.getElementById(SelectID).innerHTML = "O";
            break;        
        } else if (testing == 20) {
            break;
        }
    }

    for (var i = 1; i != 10; i = i + 3)
    {
        if (document.getElementById("posto-" + i.toString()).innerHTML == "X" || document.getElementById("posto-" + i.toString()).innerHTML == "O") {
            if (document.getElementById("posto-" + i.toString()).innerHTML == document.getElementById("posto-" + (i+1).toString()).innerHTML) {
                if (document.getElementById("posto-" + (i+1).toString()).innerHTML == document.getElementById("posto-" + (i+2).toString()).innerHTML) {
                    document.getElementById("status").innerHTML = "Tris";
                }
            }
        }
    }

    for (var i = 1; i != 4; i++)
    {
        if (document.getElementById("posto-" + i.toString()).innerHTML == "X" || document.getElementById("posto-" + i.toString()).innerHTML == "O") {
            if (document.getElementById("posto-" + i.toString()).innerHTML == document.getElementById("posto-" + (i+3).toString()).innerHTML) {
                if (document.getElementById("posto-" + (i+3).toString()).innerHTML == document.getElementById("posto-" + (i+6).toString()).innerHTML) {
                    document.getElementById("status").innerHTML = "Tris";
                }
            }
        }
    }

    if (document.getElementById("posto-1").innerHTML == "X" || document.getElementById("posto-1").innerHTML == "O") {
        if (document.getElementById("posto-1").innerHTML == document.getElementById("posto-5").innerHTML) {
            if (document.getElementById("posto-5").innerHTML == document.getElementById("posto-9").innerHTML) {
                document.getElementById("status").innerHTML = "Tris";
            }
        }
    }

    if (document.getElementById("posto-3").innerHTML == "X" || document.getElementById("posto-3").innerHTML == "O") {
        if (document.getElementById("posto-3").innerHTML == document.getElementById("posto-5").innerHTML) {
            if (document.getElementById("posto-5").innerHTML == document.getElementById("posto-7").innerHTML) {
                document.getElementById("status").innerHTML = "Tris";
            }
        }
    }

    winner = document.getElementById("status").innerHTML;

    var check_counter = 0;
    for (var i = 0; i != 9; ++i) {
        ++i;
        let CheckID = "posto-" + i.toString();
        if (document.getElementById(CheckID).innerHTML == "O" || document.getElementById(CheckID).innerHTML == "X")
            check_counter++;
        --i;
    }

    if (check_counter == 9)
        winner = "end";
}

var colonne_1 = document.getElementById('tris-colonne-riga-1');
for (var i = 0, len = colonne_1.children.length; i < len; i++)
{
    (function(index){
        colonne_1.children[i].onclick = function() {
            index_colonne = index;
        }
    })(i);
}

var colonne_2 = document.getElementById('tris-colonne-riga-2');
for (var i = 0, len = colonne_2.children.length; i < len; i++)
{
    (function(index){
        colonne_2.children[i].onclick = function() {
            index_colonne = index;
        }
    })(i);
}

var colonne_3 = document.getElementById('tris-colonne-riga-3');
for (var i = 0, len = colonne_3.children.length; i < len; i++)
{
    (function(index){
        colonne_3.children[i].onclick = function() {
            index_colonne = index;
        }
    })(i);
}

var righe = document.getElementById('tris-righe');
for (var i = 0, len = righe.children.length; i < len; i++)
{
    (function(index){
        righe.children[i].onclick = function() {
            index_righe = index;
        }
    })(i);
}