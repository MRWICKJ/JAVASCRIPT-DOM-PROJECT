var image = document.querySelector("#img")
var ico = document.querySelector("#ico")
var ico_btn = document.querySelector("#ico-btn")
var flag = 0
function effect(){
        ico.style.transform = "translate(-50%,-50%) scale(1)";
        ico.style.opacity = 0.8;
        setTimeout(function(){
            ico.style.opacity = 0
        }, 1000);
        setTimeout(function(){
            ico.style.transform = "translate(-50%,-50%) scale(0)";
        },1000)
        // button()
        ico_btn.style.color = "red";
        flag = 1
}
function button(){
    // console.log(flag);
        if (flag == 0) {
            ico_btn.style.color = "red";
            effect() 
            flag = 1
        }
        else{
            ico_btn.style.color = "white";
            flag = 0
        }
}
image.addEventListener("dblclick",effect)
ico_btn.addEventListener("click",button)
// effect()
// button()