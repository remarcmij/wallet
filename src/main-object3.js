import * as wallet from './wallet-object3.js';

const walletJack = wallet.createWallet('Jack', 100);
const walletJoe = wallet.createWallet('Joe', 10);
const walletJane = wallet.createWallet('Jane', 20);

wallet.transferInto.call(walletJack, walletJoe, 50);

wallet.transferInto.call(walletJack, walletJoe, 50);
wallet.transferInto.call(walletJane, walletJoe, 25);

wallet.deposit.call(walletJane, 20);
wallet.transferInto.call(walletJane, walletJoe, 25);

wallet.reportBalance.call(walletJack);
wallet.reportBalance.call(walletJoe);
wallet.reportBalance.call(walletJane);
