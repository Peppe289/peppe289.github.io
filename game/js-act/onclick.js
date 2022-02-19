var turno = 0;
var index_colonne;
var index_righe;

function checkinput() {
    var test = index_colonne;
    var pos = 0;

    if (test != "NULL") {
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
            if (_checkstatus == "X" || _checkstatus == "O")            
                document.getElementById("status").innerHTML = "Errore nell'input";
            else {
                //gestisci i turni
                turno++;
                document.getElementById("status").innerHTML = "All good";
                if (turno % 2 == 0)
                    document.getElementById(SelectID).innerHTML = "O";
                else
                    document.getElementById(SelectID).innerHTML = "X";
            }
        }
    }
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