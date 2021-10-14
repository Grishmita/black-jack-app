

let player = {

	name : "Player",
	chips: 145 +"💰"
}

let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message =" "

console.log(cards)



document.getElementById("ply-info").textContent = player.name + ": $"  + player.chips 


function randomCard(){
	let randomNumber = Math.floor((Math.random() * 13)) + 1 

	if( randomNumber  > 10){
		return 10
	}else if( randomNumber === 1){
		return 11
	}else{
		return  randomNumber 
	}
}




function startGame(){
 isAlive = true
let firstCard = randomCard()
let secondCard = randomCard()
 
 cards = [firstCard, secondCard]
    sum = firstCard + secondCard 

console.log(sum)
	 renderGame()
}


function renderGame(){
	console.log("game started")

	//document.getElementById("cards-el").textContent = "Cards: " + cards[0] +" "+ cards[1] 

  
document.getElementById("cards-el").textContent = "Cards: "

	for(let i =0; i <cards.length; i++){
		document.getElementById("cards-el").textContent += cards[i] + " "
	}

	document.getElementById("sum-el").textContent = "Sum: " + sum

	console.log(sum)
    // document.getElementById("cards-el").textContent = "Cards: " +" " + firstCard +" "+ secondCard

  if(sum <= 20){
  	message = " Do you want to try again ❓❓"
  	console.log(sum)
  		console.log(message)
  		console.log(isAlive , hasBlackJack)
  }else if (sum === 21){
  	message = " 👏 Congratulation, you won  🙌 🎉"
  	hasBlackJack = true
  	console.log(sum)
  	console.log(message)
  	console.log(isAlive , hasBlackJack)
  }else{
  	message = "Sorry, you lost 🙇‍"
  	 isAlive = false
  		console.log(message)
  	console.log(sum)
  	console.log(isAlive , hasBlackJack)
  }

document.getElementById("message-el").textContent = message


}

function newCard() {
  
    if( isAlive === true && hasBlackJack === false){
      let card = randomCard()
      sum += card
      cards.push(card)
      renderGame()

	  console.log("Drawing new card from the deck")
     }
   

	 console.log(" run")
}


