player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name")
player1_score= 0;
document.getElementById("player1_name").innerHTML =player1_name+":"
document.getElementById("player1_score").innerHTML= player1_score ;
document.getElementById("player_question").innerHTML= "question turn -"+ player1_name
player2_score= 0;
document.getElementById("player2_name").innerHTML =player2_name+":"
document.getElementById("player2_score").innerHTML= player2_score ;
document.getElementById("player_answer").innerHTML= "answer turn -"+ player2_name
question_turn="player1"
answer_turn="player2"
var answer2= document.getElementById("answer1")




function send() {
    get_num1 = document.getElementById("word").value
   get_num2=document.getElementById("answer1").value
   result=get_num1*get_num2

question_word= "<h4 id='word_display'>q."+get_num1+"X"+get_num2+"</h4>"   
input_box="<br>Answer:<input type='text'id='input_check_box'>"
check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>"
row= question_word+input_box+check_button
document.getElementById("output").innerHTML= row;
}


function check(){
    var answer=document.getElementById("input_check_box").value
   
    console.log(word)
    console.log(answer)
    if(answer==result){
        if(answer_turn=="player1"){
            player1_score++
            console.log(player1_score)
            document.getElementById("player1_score").innerHTML=player1_score
            
        }
        else{
            player2_score++
            document.getElementById("player2_score").innerHTML=player2_score
           console.log(player2_score)  
        }
    }
    if(answer_turn=="player1"){
        answer_turn="player2"
        question_turn="player1"
        document.getElementById("player_question").innerHTML="question turn:"+player1_name
        document.getElementById("player_answer").innerHTML="answer turn:"+player2_name
    }
    else{
        answer_turn="player1"
        question_turn="player2"
        document.getElementById("player_question").innerHTML="question turn:"+player2_name
        document.getElementById("player_answer").innerHTML="answer turn:"+player1_name
    }
    document.getElementById("output").innerHTML=""
}

