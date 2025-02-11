let humanPoints= 0
let pcPoints= 0

//decidir limite de pontos para vitoria,apontar vencedor e resetar placar após vitoria
function score(){
let humanPointsDisplay= document.getElementById("playerScore")
let pcPointsDisplay= document.getElementById("computerScore")
let winnerDisplay= document.getElementById("match result")
let winner=""
humanPointsDisplay.textContent="Player score: "+humanPoints
pcPointsDisplay.textContent="Computer score: "+pcPoints
//se pcPoints ou humanPoints >5
if (pcPoints==5 || humanPoints==5) {
//declarar o maior pontuador vencedor
   if (humanPoints>pcPoints) {
      winner="PLAYER"
   }else{
      winner="COMPUTER"
   }
   winnerDisplay.textContent=winner+" WINS!"
//e resetar ambos os valores
   humanPoints=0
   pcPoints=0
}

}

function compare(hChoice,pcChoice) {
//comparar escolhas e incrementar pontos dependendo do resultado
   let result= ""
   let roundResultDisplay=document.getElementById("roundResult")
   if (hChoice=== pcChoice)
      {result = "Tie!"
      }else{
      if ((hChoice=== "rock" && pcChoice=== "scissors")
         ||
            (hChoice=== "scissors" && pcChoice=== "paper")
         || 
            (hChoice=== "paper" && pcChoice==="rock"))  

            {result= "Player scores!"
             ++humanPoints
            }
      else{result= "Computer scores!"
           ++pcPoints
         }}
   roundResultDisplay.textContent=result
   score()      
   return
}
//receber escolha do jogador e gerar escolha do computador
function getChoices(){
//escolha do jogador
   let hChoice= "";
   let playerChoiceDisplay= document.getElementById("playerChoice")
   let computerChoiceDisplay= document.getElementById("computerChoice")
   let buttons= document.getElementById("choicesContainer");
   buttons.addEventListener("click", (event)=>{
      let target= event.target
      switch (target.id){
         case "rock":
            hChoice= target.id;
            break;
         case "scissors":
            hChoice= target.id;
            break;
         case "paper":
            hChoice= target.id;
            break;
         }
//escolha do computador
   const max= 4;
   const min= 1;
   let pcChoice= Math.random() * (max - min) + min;
      if (pcChoice>= 3){
         pcChoice= "scissors";
         }else{ 
            if(pcChoice>= 2)
            {pcChoice= "paper";
            }else{
            pcChoice= "rock";
         }}
//invocar função de comparação
         compare(pcChoice,hChoice)
         playerChoiceDisplay.textContent="Player choice: "+hChoice
         computerChoiceDisplay.textContent="Computer choice: "+pcChoice 
          return
      })

   }
getChoices()



console.log(result)
























//function playGame(){
//let round= 0
//let finalResult=""
//while (round< 5) {
//   Playround()
//  ++round
//   console.log("round:",round)
//}
//}

/* function Playround(){

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

 */