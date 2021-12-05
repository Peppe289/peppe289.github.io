var lang = 1;

function switchLang(){
    if(lang == 0){
        lang = 1;
        var nascondi = document.getElementsByClassName('eng');
        var mostra = document.getElementsByClassName('ita');
        for(let i=0; i < nascondi.length; i++){
            nascondi[i].classList.add("hide");
            mostra[i].classList.remove("hide");
        }
        console.log("ITA");
    } else {
        lang = 0;
        var nascondi = document.getElementsByClassName('ita');
        var mostra = document.getElementsByClassName('eng');
        for(let i=0; i < nascondi.length; i++){
            nascondi[i].classList.add("hide");
            mostra[i].classList.remove("hide");
        }
        console.log("ENG");
    }
}