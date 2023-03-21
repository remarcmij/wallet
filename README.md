# Wallet Exercise

## Assignment

Add a maximum daily withdrawal feature to **each** of the different wallet implementations. However, in `ex1-closure.js` the new functionality has already been implemented for you, to serve an example.

1. Add two data values to the wallet:

   - A variable/property `dailyAllowance` indicating the maximum amount that can be withdrawn per day. Set the default value to 40.
   - A variable/property `dayTotalWithdrawals` that holds the total amount withdrawn during the day, initially zero.

2. Add a method `resetDailyAllowance()` to reset the daily allowance. It should reset `dayTotalWithdrawals` to zero. Assume that the issuer of the wallet (e.g. a bank) will call this function at the start of a new day.

3. Add a method `setDailyAllowance(newAllowance)` to set/update the maximum daily allowance (`dailyAllowance`). Assume that the issuer of the wallet (e.g., bank) will call this function after approving a request from the wallet owner to update the daily allowance.

4. Update other methods as required to support the new functionality.

## Public Interface vs Private Implementation

Imagine that our various wallet implementations are used as libraries by third party developers, perhaps as part of a banking application. We would expect those developers to access the functionality of a wallet through the methods that we provided. We consider that to be the _public interface_ of our wallet. If third party developers would be allowed to manipulate the internals of the wallet (e.g. `cash`, `dailyAllowance`, etc.) we can no longer guarantee its correct working. We consider those internals to be _private implementation details_, and we would want the reserve the right to make implementation changes/improvements. So long as such changes are not impacting what can be observed through the _public interface_ there should not be any problem.

In the _closure_ version of the wallet the internal values (`cash`, `dailyAllowance`, etc.) are well protected against unwanted modification. Those values are simply not accessible outside of the `createWallet()` function.

In the other versions the private properties are accessible and prone to unwanted modification unless we take measures to either indicate that those properties are to be considered private or actually make those values inaccessible.

When working with regular JavaScript objects there is no easy way to hide "private" properties. Over the years developers have adopted a naming convention for such private properties of plain old JavaScript object: they begin the property names with an underscore character, e.g.:

```js
_cash, _name;
```

While this does not protect a properties against modification we can least indicate to other developers hat we consider such a property _private_, i.e. not to be accessed or manipulated directly.

> For more information, see this StackOverflow question: [Is the underscore prefix for property and method names merely a convention?](https://stackoverflow.com/questions/4484424/is-the-underscore-prefix-for-property-and-method-names-merely-a-convention)

Until fairly recently, we had no alternative to do the same when using the ES6 `class` syntax. However, in ES2022, now well supported in modern, evergreen browsers we have the ability to make class fields truly private, by using a `#` prefix:

```js
#hash, #name;
```

> More information on MDN: [Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

## Getters and Setters

Sometimes we do want to provide access to internal object/class fields, but in a controlled way through the _public interface_. In this case we can use _getters_ and _setters_. For instance, if we want to give readonly access to a private field we can provide a _getter_ method (but no _setter_) that just returns the value of the private field. For instance:

```js
getCash() {
  return this._cash;
}

getName() {
  return this._name;
}
```

In a _setter_ method we could add validations to ensure that only valid values are accepted to update the private field, e.g.

```js
setEmail(email) {
  // See: https://www.regular-expressions.info/index.html
  if (/^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b.test(email)) {
    this._email = email
  } else {
    console.error('Invalid email address!');
  }
}
```

In ES6 classes you can use special _getters_ and _setters_. You will find an example of an ES6 _getter_ in the `ex2-classes.js`.

> More information on ES6 getters and setters on MDN:
>
> - [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
> - [setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)
