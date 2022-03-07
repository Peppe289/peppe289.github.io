function gotostep_2() {
    var nascondi = document.getElementsByClassName('step-1');
    var mostra = document.getElementsByClassName('step-2');
    for(let i=0; i < nascondi.length; i++){
        nascondi[i].classList.add("hide");
        mostra[i].classList.remove("hide");
    }
    console.log("OPEN");
}