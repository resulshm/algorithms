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
