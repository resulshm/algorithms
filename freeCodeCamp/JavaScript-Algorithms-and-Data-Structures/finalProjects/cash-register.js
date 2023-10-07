/*
  Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

      Currency Unit   |	   Amount
          Penny	      | $0.01 (PENNY)
          Nickel	    | $0.05 (NICKEL)
          Dime	      | $0.1 (DIME)
          Quarter	    | $0.25 (QUARTER)
          Dollar	    | $1 (ONE)
       Five Dollars 	| $5 (FIVE)
       Ten Dollars  	| $10 (TEN)
     Twenty Dollars  	| $20 (TWENTY)
   One-hundred Dollars| $100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

var currencyValues = {
  "ONE HUNDRED": 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
};
function checkCashRegister(price, cash, cid) {
  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  let change = cash - price;
  if (totalCid == change) {
    return { status: "CLOSED", change: cid };
  }

  if (totalCid < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  let changes = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    const currency = cid[i][0];
    const value = currencyValues[currency];
    let currencyAmount = 0;

    while ((change - value).toFixed(2) >= 0 && cid[i][1] - value >= 0) {
      change -= value;
      cid[i][1] -= value;
      currencyAmount += value;
    }
    if (currencyAmount > 0) {
      changes.push([currency, currencyAmount]);
    }
  }

  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: changes };
}

let result = checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
console.log(result);
