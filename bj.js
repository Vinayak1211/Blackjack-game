
let sum=0
let cardsl=[]
let message=""
let message1=document.getElementById("message")
let sum1=document.getElementById("sum")
let cards1=document.getElementById("cards")
let alive=false
let win=false
let player1={
    name: "Vinayak",
    chips: 124
}
let player2=document.getElementById("player")
player2.textContent=player1.name+": $"+player1.chips
function start(){
    let first =getrandom()
    let second=getrandom()
     sum=first +second
     win=false
     alive=true
    cardsl=[first,second]
    render()
}
function getrandom(){
    let random=Math.floor(Math.random()*13)+1
    if(random>10){
        random=10
    }
    else if(random==1){
        random=11
    }
    return random
}

function render(){
    cards1.textContent="Cards: "
    for(let i=0;i<cardsl.length;i++){
        cards1.textContent+=cardsl[i]+" "
    }
    sum1.textContent="Sum: "+sum
    if(sum<=20){
        message="Do you want to draw a new card? "
    }
    else if(sum==21){
        message="Congratulations! You've got a Blackjack!"
        win=true
    }
    else{
        alive=false
        message="You're out of the game!"
    }
    message1.textContent=message
}
function newcard() {
    if(alive==true&&win==false){
    console.log("Drawing a new card from the deck!")
    let card3=getrandom()
    sum+=card3
    cardsl.push(card3)
    render()
    
}

}
