$(function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
});

function elemekElerese1() {
    /* Ide jön az 1. feladat */
    let ELEM = $("#f1").html()
    console.log(ELEM)
}

function elemekElerese2() {
    /* Ide jön a 2. feladat */
    const ELEM = $("#ide");
    ELEM.html("Jó reggelt!");
}

function elemekElerese3() {
    /* Ide jön a 3. feladat */
    const ELEM = $(".ide"); 
    ELEM.html("<p>Jó reggelt!</p>");
}

function elemekElerese4() {
    /* Ide jön a 4. feladat */
    const ELEM = $(".lista");
    let txt = "<ul>"
    for (let index = 0; index < 5; index++) {
        randomSzam = Math.floor(Math.random()*20) + 10;
        txt += `<li>${randomSzam}</li>`
    }
    txt += "</ul>"
    ELEM.html(txt);
}

function elemekFormazasa1() {
    /* Ide jön az 5. feladat */
    const ELEM = $(".lista");
    ELEM.addClass("formazott");
}

/* function esemenyKezeles1() {
    const ELEM = $("section lista")
    ELEM.on("click", function () {

    })
} */