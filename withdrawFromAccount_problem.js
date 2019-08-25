/*

const account1 = {
  name: 'Jen',
  totalAmount: 5000,
  deductAmount: function(amount) {
    this.totalAmount -= amount;
    return 'Amount in account: ' + this.totalAmount;
  },
};

const account2 = {
  name: 'James',
  totalAmount: 8000,
};

const withdrawFromAccount = function(amount) {
  return account1.deductAmount.bind(account2, amount);
};

console.log(withdrawFromAccount(500)());
console.log(withdrawFromAccount(200)());






Solution:
-----
Amount in account: 7500
Amount in account: 7300

We are binding deductAmount method from account1
and binding it to the account2
*/
