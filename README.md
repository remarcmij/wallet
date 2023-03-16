# Wallet Exercise

## Assignment

Add a maximum daily withdrawal feature to **each** of the different wallet implementations:

1. Add two data values to the wallet:

   - A variable/property `dailyAllowance` indicating the maximum amount that can be withdrawn per day. Set the default value to 100.
   - A variable/property `dayTotalWithdrawals` that holds the total amount withdrawn during the day, initially zero.

2. Add a method `resetDailyAllowance()` to reset the daily allowance. It should reset `dayTotalWithdrawals` to zero. Assume that the issuer of the wallet (e.g. a bank) will call this function at the start of a new day.

3. Add a method `setDailyAllowance(newAllowance)` to set/update the maximum daily allowance (`dailyAllowance`). Assume that the issuer of the wallet (e.g., bank) will call this function after approving a request from the wallet owner to update the daily allowance.

4. Update other methods as required to support the new functionality.
