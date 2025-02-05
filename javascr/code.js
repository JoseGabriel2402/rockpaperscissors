
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
 console.log(PCchoice)
 return PCchoice
}
//receber escolha do jogador 
function getHumanChoice(){
//validar escolha
 let valid_answers= ["rock","paper","scissors"]
 let Hchoice= prompt("rock,paper or scissors?","rock").toLowerCase()
 if (!valid_answers.includes(Hchoice))
    {Hchoice= "Invalid answer!"}
 console.log(Hchoice)
 return Hchoice
 }

//comparar resultados e decidir ganhador
let Hchoice= getHumanChoice()
let PCchoice= getComputerChoice()
let humanScore= 0
let pcScore= 0
function CompareResults(){
let result= "a"
if (Hchoice=== PCchoice)
   {result = "Tie!"
    }else{
     if ((Hchoice=== "rock" && PCchoice=== "scissors")
      ||
         (Hchoice=== "scissors" && PCchoice=== "paper")
      || 
         (Hchoice=== "paper" && PCchoice==="rock"))  

         {result= "Human victory!"}
     else{result= "Computer victory!"}}
console.log(result)
return result
}   
CompareResults()
