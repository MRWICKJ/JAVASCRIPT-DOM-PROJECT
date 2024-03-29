var add_friend = document.querySelector("#add")
// console.log(add_friend);
var isStatus = document.querySelector("#status")

var flag = 0

// var remove_friend = document.querySelector("#remove")

add_friend.addEventListener("click",function(){
    if (flag == 0) {
       // console.log("hi");
        isStatus.innerHTML = "Friend"
        isStatus.style.color = "green" 
        add_friend.style.backgroundColor = "#dadada"
        add_friend.innerHTML = "Remove"
        flag = 1
    }
    else{
        isStatus.innerHTML = "Stranger"
        isStatus.style.color = "red"
        add_friend.style.backgroundColor = "#08cdac"
        add_friend.innerHTML = "Add Friend"
        flag = 0
    }
    
})

// remove_friend.addEventListener("click",function(){
//     isStatus.innerHTML = "Stranger"
//     isStatus.style.color = "red"
// })
