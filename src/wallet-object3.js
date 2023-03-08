import eurosFormatter from './euroFormatter.js';

export function deposit(amount) {
  this._cash += amount;
}

export function withdraw(amount) {
  if (this._cash - amount < 0) {
    console.log(`Insufficient funds!`);
    return 0;
  }

  this._cash -= amount;
  return amount;
}

export function transferInto(wallet, amount) {
  console.log(
    `Transferring ${eurosFormatter.format(amount)} from ${
      this._name
    } to ${getName.call(wallet)}`
  );
  const withdrawnAmount = withdraw.call(this, amount);
  deposit.call(wallet, withdrawnAmount);
}

export function reportBalance() {
  console.log(
    `Name: ${this._name}, balance: ${eurosFormatter.format(this._cash)}`
  );
}

export function getName() {
  return this._name;
}

export function createWallet(name, cash = 0) {
  return {
    _name: name,
    _cash: cash,
  };
}
