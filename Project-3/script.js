var main = document.querySelector("#main")
var cur = document.querySelector("#curser")

main.addEventListener("mousemove",function(dets){
    //console.log(dets);
    cur.style.left = dets.x+"px"
    cur.style.top = dets.y+"px"
})