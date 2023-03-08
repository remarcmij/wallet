import eurosFormatter from './euroFormatter.js';

export function deposit(_this, amount) {
  _this._cash += amount;
}

export function withdraw(_this, amount) {
  if (_this._cash - amount < 0) {
    console.log(`Insufficient funds!`);
    return 0;
  }

  _this._cash -= amount;
  return amount;
}

export function transferInto(_this, wallet, amount) {
  console.log(
    `Transferring ${eurosFormatter.format(amount)} from ${
      _this._name
    } to ${getName(wallet)}`
  );
  const withdrawnAmount = withdraw(_this, amount);
  deposit(wallet, withdrawnAmount);
}

export function reportBalance(_this) {
  console.log(
    `Name: ${_this._name}, balance: ${eurosFormatter.format(_this._cash)}`
  );
}

export function getName(_this) {
  return _this._name;
}

export function createWallet(name, cash = 0) {
  return {
    _name: name,
    _cash: cash,
  };
}
