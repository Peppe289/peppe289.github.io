/******** Side bar active animation ********/
var sidebar = document.getElementsByClassName("sidetoggle");
var i;
var check_whell = 1;
for (i = 0; i < sidebar.length; i++) {
    sidebar[i].addEventListener("click", function () {
        // clean up other select class
        var k = 0;
        for (k = 0; k != sidebar.length; ++k) {
            if (sidebar[k] === this) {
                /*
                * I need to put this here becouse 2 funct
                * remove and add active class in size bar list.
                * I need to update also when i click and not
                * use mouse wheel.
                */
                check_whell = k + 1;
            }

            sidebar[k].classList.remove("active");
        }
        // add active class to select div
        this.classList.toggle("active");
    });
}
/******************* END *******************/

/************** Wheel scroll ***************/
var item = document.getElementById("main");
var local_wheel = 1;
window.addEventListener("wheel", function (e) {

    if (e.deltaY > 0) {
        local_wheel += 1;
    } else {
        local_wheel -= 1;
    }

    if (local_wheel > 3) {
        local_wheel = 3;
    } else if (local_wheel < 1) {
        local_wheel = 1;
    }


    if (check_whell !== local_wheel) {
        check_whell = local_wheel;
        var k = 0;
        for (k = 0; k != sidebar.length; ++k) {
            sidebar[k].classList.remove("active");
        }
        sidebar[local_wheel - 1].classList.add("active");
    }

    if (local_wheel === 1) {
        window.open("#home-reference", "_self");
    } else if (local_wheel === 2) {
        window.open("#project-reference", "_self");
    } else {
        window.open("#misc-reference", "_self");
    }
});
/******************* END *******************/
