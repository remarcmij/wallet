# Wallet Exercise

## Assignment

Add a maximum daily withdrawal feature to **each** of the different wallet implementations. However, in `ex1-closure.js` the new functionality has already been implemented for you, to serve an example.

1. Add two data values to the wallet:

   - A variable/property `dailyAllowance` indicating the maximum amount that can be withdrawn per day. Set the default value to 40.
   - A variable/property `dayTotalWithdrawals` that holds the total amount withdrawn during the day, initially zero.

2. Add a method `resetDailyAllowance()` to reset the daily allowance. It should reset `dayTotalWithdrawals` to zero. Assume that the issuer of the wallet (e.g. a bank) will call this function at the start of a new day.

3. Add a method `setDailyAllowance(newAllowance)` to set/update the maximum daily allowance (`dailyAllowance`). Assume that the issuer of the wallet (e.g., bank) will call this function after approving a request from the wallet owner to update the daily allowance.

4. Update other methods as required to support the new functionality.

Notes:

The wallet objects in the exercise are examples of objects that combine data with methods that manipulate that data. This organization of data and methods is key foundation of Object-Oriented Programming (OOP) methodology. The object's methods are said to comprise the object's _behaviour_.

In objects that combine data and behaviour in this way we often need to make a distinction between and object's _public interface_ and its (private) _implementation_.

The _public interface_ can be thought of as a _contract_ between the user of the object (i.e. the external code that interacts with the object by calling its method.) This becomes particularly important when the object is part of a library or perhaps maintained by another team.

Calling code should not concern itself with the internal implementation of the object. This should be considered private to the object and potentially subject to change. As long as the public interface is maintained, the owner of the object can change/improve the internal implementation, without this breaking calling code.

In principle, calling code should not directly access value properties of an object and, even more important, should never directly mutate such properties. Where needed, the object can provide _getter_ and _setter_ methods through its public interface for this purpose.
