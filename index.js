// Code your solutions in this file

// The for loop
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
};
*/

// Using for with Arrays
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
};
wrapGifts(gifts);
*/

// for Loop Assignment

let messages = [];

function writeCards(recipients, occasion) {
    for (let i = 0; i < recipients.length; i++) {
        console.log("Adding a message!");
        messages.push(`Thank you, ${recipients[i]}, for the wonderful ${occasion} gift!`)
        debugger;
    }
    console.log("All cards written!");
    return messages;
};

// The while Loop
/*
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
        debugger;
    }
    return gifts;
};
wrapGifts(gifts);
*/

// while Loop Assignment
function countDown(integer) {
    let i = 0;
    while (integer >= 0) {
        console.log(integer);
        integer -= 1;
        i++;
    };
};
