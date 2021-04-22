### Part 1a

1. "values added: 20"
2. "final result: 20"
3. "values added: 20"
4. This code returns an error, since `let result` is scoped within the curly braces.
5. Line 7 causes an error due to changing the value of a `const` variable. Line 9 was never reached.
6. Due to the same reasons as number 5, line 13 was never reached.

### Part 1b

1. This would print `3`, since the `var i` isn't blocked scoped, and can be acessed outside the `for` loop. Therefore, when the `for` loop ends (with `i = 3`), the variable is still visible.
2. This would print `150`, since the `var i` isn't blocked scoped, and can be acessed outside the `for` loop. Similar to the previous question, `discountedPrice` would be set to the last calculation.
3. This would also print `150`, since `finalPrice` is declared on line 4, it is updated with each iteration of the `for` loop and is within the scope at line 14.
4. The function returns an array of new prices where each price from `prices` is discounted by `disocunt` (rounded so we don't have a decimal `price`).
5. This would give an error that `i` wasn't defined. This is due to `let i` being block-scoped in the for loop.
6. This would give a similar error to the previous question, since `discountPrice` is block-scoped in the for loop.
7. This would print the same result as question 3, since `finalPrice` is delcared in line 4 (and as such it is able to be acessed in the same block).
8. This would return the same result as question 4 (an array of new prices with discount). In this case switching variable declaration doesn't affect the end result.
9. The program will crash on line 8 since it is trying to update `const discounted`. It will not reach line 11.
10. For the same reasons as number 9, the program will not reach line 12.
11. For the same reason as the 2 questions before, the function will throw an erro and not return a value.
12. - student.name
    - student['Grad Year']
    - student.greeting()
    - student['Favorite Teacher'].name
    - student.courseLoad[0]
13. - `'32'` since the integer gets converted to a string
    - `1` since the stirng gets converted to a integer
    - `3` since null converts to the number 0
    - `'3null'` since null converts to the string 'null'
    - `4` since true converts to the number 1
    - `0` false and null both convert to the number 0
    - `'3undeffined'` the type undefined turns into a string 'undefined'
    - 'NaN' undefined becomes NaN when evaluated as a number
14. - `true`, the sting '2' is converted to the number 2.
    - `false`, when comparing 2 string, they are compared lexographically (like comparing their ASCII values).
    - `true` converting the string '2' to the number 2 before comparing.
    - `false`, the triple equality checks the original types as well, which compares a number and a string
    - `false` the boolean true is converted to the number 1
    - `true` the number 2 first gets converted to a boolean, and the triple equalty checks to see if the 2 booleans are the same value.
15. The triple equality checks equality of types and value. There won't be any automatic type conversions for triple-equals, but double equals allows for type conversions before checking.
16. code in part1b-question16.js
17. This call will return [2,4,6]. The function `doSomething` will take a number and multiply them by 2. This function is passed into `modifyArray` and will be called on each element of the array we are passing in.
18. code in part1b-question18.js
19. 1432
