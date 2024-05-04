let dola =document.getElementById("adel");
let card= document.getElementsByClassName("card")[0];
let card_after=window.getComputedStyle(card,'::after');
let card_before=window.getComputedStyle(card,'::before');
console.log(card_after.content)

dola.addEventListener("click",function(el){
    setTimeout((el) => {
        window.location.assign("second.html")
    },600);
    card.style.setProperty("--var","thankyou")
    card.style.setProperty("--vdr","thankyou")

})
