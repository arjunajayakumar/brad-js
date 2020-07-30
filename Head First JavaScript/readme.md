## Head First JavaScript

### Chapter 1: Getting your feet wet

#### Variables and Values

    let winners = 2; - This ststement declare a variable named winners and assigns a numeric value of 2 to it

    let name = "Dukes"; - This one assigns a string of characters to the variable name(we call those “strings,” for short)

    let isEligible = false; - And this statement assigns the value false to the variable isEligible. We call true/false values “booleans".

#### Express yourself(Expressions)

    let total = price - (price * (discount / 100));

    total = variable
    '=' - assignment
    '*' - multiply
    price - (price * (discount / 100)) - expression;

#### Doing things more than once(Loops)

    * while loop
        
        while (scoops > 0) {
            document.write("Another scoop!");
            scoops = scoops - 1;
        }

#### Making Decisions with javascript
    * if statement
    
        if (scoops >= 50) {
            alert("Icecream is running low")
        }



    * String together multiple tests(Using arithemetic and logical operators)

        if (scoops >= 50) {
            alert('Eat faster, the icecream is going to melt')
        } else if (scoops < 3) {
            alert("Icecream is running low");
        }

    * When we need to make a lot of decisions(Nested if)

        if (scoops >= 50) {
            alert('Eat faster, the icecream is going to melt')
        } else if (scoops < 3) {
            alert("Icecream is running low");
        }

### Chapter- 1 : Bullet Points

1. One of the most common JavaScript statements is a variable declaration, which uses the var keyword to declare a new variable and the assignment operator, =, to assign a value to it.

2. Three common types of expressions are numeric, string and boolean expressions.

3. if/else statements allow you to make decisions in your code.

4. while/for statements allow you to execute code many times by looping.

5. Use console.log instead of alert to display messages to the Console.


### Chapter 2: Going further

### Battleship game

Working through the Pseudocode

Pseudocode is halfway between real JavaScript code and a plain English description of the program, and as you’ll see, it will help us think through how the program is going to work without fully having to develop the real code.


Writing a pseudo code
---------------------

Variables we need
------------------

* DECLARE three variables to hold the location of each cell of the ship. Let’s call them
    location1, location2 and location3.
* DECLARE a variable to hold the user’s current guess. Let’s call it guess.
    The variables we need.
* DECLARE a variable to hold the number of hits. We’ll call it hits and set it to 0.
* DECLARE a variable to hold the number of guesses. We’ll call it guesses and set it to 0.
* DECLARE a variable to keep track of whether the ship is sunk or not. Let’s call it isSunk
  and set it to false.


 Logic
 -----

    LOOP: while the ship is not sunk

            GET the user’s guess
            COMPARE the user’s input to valid input values
        IF the user’s guess is invalid,
            TELL user to enter a valid number
        ELSE
            ADD one to guesses

            IF the user’s guess matches a location

                ADD one to the number of hits

                    IF number of hits is 3
                    
                        SET isSunk to true

                        TELL user “You sank my battleship!”
                    END IF
            END IF
            END ELSE
    END LOOP

TELL user stats

### Chapter- 2 : Bullet Points

1. Before we begin writing a program, it’s a good idea to sketch out what your program needs to do with pseudocode.

2. Pseudocode is an approximation of what your real code should do.

3. There are two kinds of boolean operators: comparison operators and logical operators. When used in an expression, boolean       operators result in a true or false value.

4. Comparison operators compare two values and result in true or false. For example, we can use the boolean comparison operator < (“less than”) like this: 3 < 6. This expression results in true.

5. Logical operators combine two boolean values. For example true || false results in true; true && false results in false.

6. You can generate a random number between 0 and 1 (including 0, but not including 1) using the Math.random function.

7. The Math.floor function rounds down a decimal number to the nearest integer.

8. The JavaScript function prompt shows a dialog with message and a space for the user to enter a value.

9. In this chapter, we used prompt to get input from the user, and alert to display the results of the battleship game in the browser.

