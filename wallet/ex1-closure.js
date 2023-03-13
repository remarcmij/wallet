import eurosFormatter from './euroFormatter.js';

function createWallet(name, cash = 0) {
  function deposit(amount) {
    cash += amount;
  }

  function withdraw(amount) {
    if (cash - amount < 0) {
      console.log(`Insufficient funds!`);
      return 0;
    }

    cash -= amount;
    return amount;
  }

  function transferInto(wallet, amount) {
    console.log(
      `Transferring ${eurosFormatter.format(
        amount
      )} from ${name} to ${wallet.getName()}`
    );
    const withdrawnAmount = withdraw(amount);
    wallet.deposit(withdrawnAmount);
  }

  function reportBalance() {
    console.log(`Name: ${name}, balance: ${eurosFormatter.format(cash)}`);
  }

  const getName = () => name;

  return {
    deposit,
    withdraw,
    transferInto,
    reportBalance,
    getName,
  };
}

function main() {
  const walletJack = createWallet('Jack', 100);
  const walletJoe = createWallet('Joe', 10);
  const walletJane = createWallet('Jane', 20);

  walletJack.transferInto(walletJoe, 50);
  walletJane.transferInto(walletJoe, 25);

  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);

  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();
}

main();
