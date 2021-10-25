var lang = 1;

function switchLang(){
    if(lang == 0){
        lang = 1;
        var nascondi = document.getElementsByClassName('eng');
        var mostra = document.getElementsByClassName('ita');
        document.getElementById('pulsante').textContent="clicca per inglese"
        for(let i=0; i < nascondi.length; i++){
            nascondi[i].classList.add("hide");
            mostra[i].classList.remove("hide");
        }
        console.log("ITA");
    } else {
        lang = 0;
        var nascondi = document.getElementsByClassName('ita');
        var mostra = document.getElementsByClassName('eng');
        document.getElementById('pulsante').textContent="click for italian"
        for(let i=0; i < nascondi.length; i++){
            nascondi[i].classList.add("hide");
            mostra[i].classList.remove("hide");
        }
        console.log("ENG");
    }
}