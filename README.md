## **WeddriverIO/ Mocha Practice Tasks**

---

Setup new WebdriverIO project using Starter Toolkit (npm init wdio .) use mocha framework without Page Objects.

---

### Task:

1. Implement page objects that can be suitable for your previous tests
https://automationteststore.com/:

    - Login smoke positive
    - Login negative
    - Shopping card flows on behalf of the login user (buy any good and check card)
    - Search in a certain category

2. Improve these tests using Page Objects

3. Use Mocha hooks and other framework capabilities to organising your tests

---

### Comments: 

- You can compose some objects from small components
- Use PO to store locators and some actions methods
- Don't use assertion inside the PO
- You can put the Login or other preconditions in Mocha Hooks
    