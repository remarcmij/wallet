import * as wallet from './wallet_this.js';

const walletJack = wallet.createWallet('Jack', 100);
const walletJoe = wallet.createWallet('Joe', 10);
const walletJane = wallet.createWallet('Jane', 20);

wallet.transferInto(walletJack, walletJoe, 50);

wallet.transferInto(walletJack, walletJoe, 50);
wallet.transferInto(walletJane, walletJoe, 25);

wallet.deposit(walletJane, 20);
wallet.transferInto(walletJane, walletJoe, 25);

wallet.reportBalance(walletJack);
wallet.reportBalance(walletJoe);
wallet.reportBalance(walletJane);
