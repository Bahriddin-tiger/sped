var elForm = document.querySelector(".speid__form");
var elInput = document.querySelector(".form__input1");
var elResult1 = document.querySelector(".js-result1");
var elResult2 = document.querySelector(".js-result2");
var elResult3 = document.querySelector(".js-result3");
var elResult4 = document.querySelector(".js-result4");
var elResult5 = document.querySelector(".js-result5");
var elResult6 = document.querySelector(".js-result6");
var elResult7 = document.querySelector(".js-result7");
var elResult8 = document.querySelector(".js-result8");
var elResult9 = document.querySelector(".js-result9");
var elResult10 = document.querySelector(".js-result10");
var elResult11 = document.querySelector(".js-result11");
var elResult12 = document.querySelector(".js-result12");
;
var spidchildren = 3.6;
var spidveli = 20.1;
var spidcar = 70;
var spidplain = 800;
var a = (inputval * 1000) / (spidchildren / 3.6);

function spedchms() {
    return a;
}

function timeclokcch() {
    return Math.floor(spedchms / 3600) + " soat";
}

function timeminutch() {
    return (timeclokcch() - spedchms()).toFixed(2) * 60 + " minut";
}

function timesch() {
    return spedchms() - (timeclokcch() * 3600 + timeminutch() * 60) + " sekund";
}

var b = (inputval * 1000) / (spidveli / 3.6);

function spedves() {
    return b;
}

function timeclokve() {
    return Math.floor(spedchms / 3600) + " soat";
}

function timeminutve() {
    return (timeclokcch() - spedchms()).toFixed(2) * 60 + " minut";
}

function timesve() {
    return spedchms() - (timeclokcch() * 3600 + timeminutch() * 60) + " sekund";
}
var c = (inputval * 1000) / (spidcar / 3.6);

function spedcar() {
    return c;
}

function timeclokcar() {
    return Math.floor(spedcar / 3600) + " soat";
}

function timeminutcar() {
    return (timeclokcch() - spedcar()).toFixed(2) * 60 + " minut";
}

function timescar() {
    return spedcar() - (timeclokcar() * 3600 + timeminutcar() * 60) + " sekund";
}
var d = (inputval * 1000) / (spidplain / 3.6);

function spedpl() {
    return d;
}

function timeclokpl() {
    return Math.floor(spedpl / 3600) + " soat";
}

function timeminutpl() {
    return (timeclokpl() - spedpl()).toFixed(2) * 60 + " minut";
}

function timespl() {
    return spedpl() - (timeclokpl() * 3600 + timeminutpl() * 60) + " sekund";
}

elForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var inputval = +elInput.value;

    if(inputval <= 0 || isNaN(inputval)) {
        jsResult1.textContent = "siz hato kiritiz!"
        jsResult.classList.remove("result-success");
        jsResult.classList.add("result-error");
        jsInput.classList.remove("is-valid")
        jsInput.classList.add("is-invalid")
        return;
      }
      else {
        jsResult.classList.remove("result-error");
        jsResult.classList.add("result-success");
        jsInput.classList.remove("is-invalid")
        jsInput.classList.add("is-valid")
      }
    elResult1.textContent ==  timeclokcch();
    elResult5.textContent == timeminutch();
    elResult6.textContent ==  timesch();
    elResult2.textContent ==  timeclokve();
    elResult7.textContent == timeminutve();
    elResult8.textContent ==  timesve();
    elResult3.textContent ==  timeclokcar();
    elResult9.textContent == timeminutcar();
    elResult10.textContent ==  timescar();
    elResult4.textContent ==  timeclokpl();
    elResult11.textContent == timeminutpl();
    elResult12.textContent ==  timespl();


})
