var score=0
function update(){
score++
document.getElementById("score").innerHTML=score;


}
function save(){
    localStorage.setItem("score",score)
}
function nextpage(){
    window.location="2.html"
}