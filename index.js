// Code your solutions in this file
function writeCards(nameArray, eventName) {
    let completedCards = [];
    for(let i = 0; i < nameArray.length; i++){
        let message = `Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`
        completedCards.push(message);
    }
    return completedCards;
};

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}