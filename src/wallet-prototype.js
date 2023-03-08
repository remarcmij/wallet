import eurosFormatter from './euroFormatter.js';

function Wallet(name, cash) {
  this._name = name;
  this._cash = cash;
}

Wallet.prototype.deposit = function (amount) {
  this._cash += amount;
};

Wallet.prototype.withdraw = function (amount) {
  if (this._cash - amount < 0) {
    console.log(`Insufficient funds!`);
    return 0;
  }

  this._cash -= amount;
  return amount;
};

Wallet.prototype.transferInto = function (wallet, amount) {
  console.log(
    `Transferring ${eurosFormatter.format(amount)} from ${
      this._name
    } to ${wallet.getName()}`
  );
  const withdrawnAmount = this.withdraw(amount);
  wallet.deposit(withdrawnAmount);
};

Wallet.prototype.reportBalance = function () {
  console.log(
    `Name: ${this._name}, balance: ${eurosFormatter.format(this._cash)}`
  );
};

Wallet.prototype.getName = function () {
  return this._name;
};

function createWallet(name, cash = 0) {
  return new Wallet(name, cash);
}

export default createWallet;
