var img = document.querySelector(".img");
var btn = document.querySelector(".btn");
var count = 1;
btn.addEventListener("click",()=>{
    if (count == 1){
        img.style.display = "none";
        sessionStorage.setItem("display","hides");
        count = 2;
    }
    else{
        img.style.display = "inline";
        sessionStorage.setItem("display","shows");
        count = 1;
    }
})













