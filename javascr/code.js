let Humanpoints= 0
let PCpoints= 0
//gerar escolha do computador
function getComputerChoice(){
 max= 4
 min=1
 let PCchoice= Math.random() * (max - min) + min
 if (PCchoice>= 3)
   {PCchoice= "scissors"
   }else{ 
    if(PCchoice>= 2)
    {PCchoice= "paper"
    }else{
    PCchoice= "rock"}
   }
 console.log("Computer:",PCchoice)
 return PCchoice
}
//receber escolha do jogador 
function getHumanChoice(){
//validar escolha
 let valid_answers= ["rock","paper","scissors"]
 let Hchoice= prompt("rock,paper or scissors?","rock").toLowerCase()
 if (!valid_answers.includes(Hchoice))
    {Hchoice= "Invalid answer!"}
 console.log("Human:",Hchoice)
 return Hchoice
 }


//repetir Playround() para x rodadas e mostrar pontos
function playGame(){
let round= 0
let finalResult=""
while (round< 5) {
   Playround()
   ++round
   console.log("round:",round)
}
}

//comparar resultados,decidir ganhador da rodada e pontuar
function Playround(){

let Hchoice= getHumanChoice()
let PCchoice= getComputerChoice()
let result= ""
if (Hchoice=== PCchoice)
   {result = "Tie!"
    }else{
     if ((Hchoice=== "rock" && PCchoice=== "scissors")
      ||
         (Hchoice=== "scissors" && PCchoice=== "paper")
      || 
         (Hchoice=== "paper" && PCchoice==="rock"))  

         {result= "Human scores!"
          ++Humanpoints
         }
     else{result= "Computer scores!"
          ++PCpoints
     }}
console.log(result)
console.log("human points:",Humanpoints)
console.log("computer points:",PCpoints)
}
playGame()

