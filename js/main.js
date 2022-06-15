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

var spidchildren = 3.6;
var spidveli = 20.1;
var spidcar = 70;
var spidplain = 800;




function timeclokcch(c) {
    return (c * 1000) / (1 );
}

function timeclokcvel(c) {
    return (c * 1000) / 5.6;
}
function timeclokccar(c) {
    return (c * 1000) / 19.4;
}
 function timeclokcplain(c) {
    return (c * 1000) / 222.2;
}



elForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var inputval = +elInput.value;

    // if(inputval <= 0 || isNaN(inputval)) {
    //     jsResult1.textContent = "siz hato kiritiz!"
    //     jsResult.classList.remove("result-success");
    //     jsResult.classList.add("result-error");
    //     jsInput.classList.remove("is-valid")
    //     jsInput.classList.add("is-invalid")
    //     return;
    //   }
    //   else {
    //     jsResult.classList.remove("result-error");
    //     jsResult.classList.add("result-success");
    //     jsInput.classList.remove("is-invalid")
    //     jsInput.classList.add("is-valid")
    //   }
    elResult1.textContent = Math.floor(timeclokcch(inputval)/3600);
    elResult5.textContent = Math.floor((timeclokcch(inputval) - (Math.floor(timeclokcch(inputval)/3600)*3600 )) / 60) ;
    elResult6.textContent = Math.floor(timeclokcch(inputval)-  elResult1.textContent * 3600 - elResult5.textContent * 60);
    elResult2.textContent = Math.floor(timeclokcvel(inputval)/3600);
    elResult7.textContent = Math.floor((timeclokcvel(inputval) - (Math.floor(timeclokcvel(inputval)/3600)*3600 )) / 60) ;
    elResult8.textContent = Math.floor(timeclokcvel(inputval)-  elResult2.textContent * 3600 - elResult7.textContent * 60);
    elResult3.textContent = Math.floor(timeclokccar(inputval)/3600);
    elResult9.textContent = Math.floor((timeclokccar(inputval) - (Math.floor(timeclokccar(inputval)/3600)*3600 )) / 60) ;
    elResult10.textContent = Math.floor(timeclokccar(inputval)-  elResult3.textContent * 3600 - elResult9.textContent * 60);
    elResult4.textContent = Math.floor(timeclokcplain(inputval)/3600);
    elResult11.textContent = Math.floor((timeclokcplain(inputval) - (Math.floor(timeclokcplain(inputval)/3600)*3600 )) / 60) ;
    elResult12.textContent = Math.floor(timeclokcplain(inputval)-  elResult4.textContent * 3600 - elResult11.textContent * 60);



})
