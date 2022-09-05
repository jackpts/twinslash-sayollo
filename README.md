# twinslash-sayollo
Test task from TwinSlash / Sayollo

- HR Contact: Inna Znak

### Figma link
- https://www.figma.com/file/PTPqrpH1gWKXlxJfvahhRR/Untitled?node-id=0%3A1

#### Description
Sayollo Frontend Developer - Home Challenge
**Background**:
**gComm (Gaming commerce)** enables online shopping inside mobile apps/gaming platforms
which potentially turns every mobile app into an online shop. Sayollo is developing the new
gComm-web system that will allow users to buy real products while they are playing web
games.

**Purpose**:
The purpose of this home challenge is to examine relevant needed skills to be a successful
Front-end developer.

**Mandatory requirements**:
- The code should be written in Angular.
- The code works well without any bugs / other crashes
- Well structure logic and clean code
- Good explanations about how and why you chose to implement it as you did

**Assignment**:
Your task is to develop a fast checkout system that will allow the user to purchase the products
in a few clicks.

**Wireframe**: https://www.figma.com/file/PTPqrpH1gWKXlxJfvahhRR/Untitled?node-id=0%3A1

The system will include the following pages:

1. **Login page**: you don't need to do authentication with external sources. Valid
email and password are _Zen@sayollo.com_ pass: _123456_
   - After a successful login, the user will see the product page

2. **Product page** - the page will include the information about a product, such as a
   name, image, short description, quantity, and Add To Cart button

   - Once the user clicks on the “Add To Cart” button the product will be added
   to the user’s cart (It has to be persistent. When the user refreshes the
   page, the product will stay in the user’s cart).
   - After the product is added to the cart, the items counter on the header will
   increase by 1 (or by the amount that the user picked in the quantity field).
   - This page will include a header with the cart’s status (items count).
  
3. **Checkout** -
   - It will include a form of the user’s details such as full name, address, and
   email (Notice that the email address was already inserted in the
   authentication step).
   - Add the credit card fields.
   - Add a button with the text “Pay X$” in which the X will be calculated
   based on the item’s price and picked quantity.iv)
   This page will include a header with the cart’s status (items count).

4. **Success Page** - Will indicate the order number (Generated Randomly).

**Notes**:
   - Please focus only on the mobile version
   - After the first purchase, the user’s details will be stored in the browser, so he wouldn't need
   to insert them again in the next order (Just click the Pay button. See example on wireframe)
   - Write the details of the order to a JSON file after a successful purchase

**How to submit**
   - Upload the code to a private Github repo and share it with me as a contributer - user
name - nmazuz
   - Add a README file
        - Write in the read me file some explanation about the code
   - Email: niso@sayollo.com
   - Please feel free to ask me any question you might have
============================================================


### Project start
- npm i -g @angular/cli
- ng new twinslash-sayollo
- ng serve
--> go to: http://localhost:4200/