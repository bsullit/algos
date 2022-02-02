//https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true
// A person wants to determine the most expensive computer keyboard and usb drive that can be purchased
//with a given bufget given price list for keyboards and USB drives and a budget, find the cost to buy them
//if it is not possible to buy both items, return -1.
// EX. 10 2 3  (budget, #keyboards, # drives)
//     3 1     (keyboards price arr)
//     5 2 8    (drives price arr)

function getMoneySpent(keyboards, drives, b) {
  let budget = b;
  let highest = 0;
  //loop the drives array nested in the keyboard array
  // to brute force compare each combination
  for (let i = 0; i < keyboards.length; i++) {
    for (let k = 0; k < drives.length; k++) {
      let driveOp = drives[k];
      let keyboardOp = keyboards[i];
      //if the combination is greater than the highest and less than the budget set to return
      if (driveOp + keyboardOp > highest && driveOp + keyboardOp <= budget) {
        highest = drives[k] + keyboards[i];
        console.log("if", highest);
      } else {
        highest = -1;
        console.log("else", highest);
      }
    }
  }
  return highest;
}
