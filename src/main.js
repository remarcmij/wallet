// import createWallet from './wallet-closure.js';
// import createWallet from './wallet-classes.js';
// import createWallet from './wallet-prototype.js';
// import createWallet from './wallet-object.js';
import createWallet from './wallet-object2.js';

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
