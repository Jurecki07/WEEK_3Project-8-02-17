/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/
let hand = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
// The function knows what hand is now
function handValue(hand) {
  let handValue = 0;
  let aceCount = 0;
  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
      // One boolean statement that has 3 comparters
      handValue += 10;
    } else if (hand[i] == Number(hand[i])) {
      handValue += Number(hand[i])

    } else {
      aceCount++
    }
  }
for ( let i = 0; i < aceCount; i++) {
  if (handValue <= 10) {
    handValue += 11
  } else if (handValue >= 10) {
    handValue += 1
  }

}
  return handValue;
}




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/