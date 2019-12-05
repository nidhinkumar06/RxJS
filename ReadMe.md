RxJs
======


Hot Observer
--------------
If we use the Share operator then the inital values are omitted which means it will not take the initial values from the publisher.

* Example

   1. Example for Hot Observer is the mouse movements that is made by the user

Cold Observer
--------------
Cold observer will load the intial values from the publisher.

Subject
========
Subject is a special type of observables

OtherSubjects
--------------
* Behaviour Subject
    - It dispatches the last emitted values
* Replay Subject
    - It dispatches any number of emitted values
* Async Subject
    - It dispatches only the last value


Operators
==========
It is an simple methods which can be used on observables and subjects. Operators are also known as Pure functions which do not modify the variables outside the scope. It is similar like lodash

  There are two types of operators
  * Static Operators - These operators are usually used to create observables
  * Instance Operators - These are methods on observable instances
