const human = document.getElementById("human");
const cactus =document.getElementById("cactus");

document.addEventListener("keydown", function(event){
    jump();
});

function jump (){
    if(human.classList!= "jump"){
        human.classList.add("jump")
    }
    setTimeout(function() {
        human.classList.add("jump")
    },300)
}
let isAlive = setInterval(function() {
    let humanTop= parseInt(window.getComputedStyle(human).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft <50 && cactusLeft>0 && humanTop >=140){
        alert("GAME OVER!")
    }
},10)


