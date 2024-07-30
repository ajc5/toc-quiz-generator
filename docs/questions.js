const questionsData = {
    "1.1.1 Manipulating algebraic expressions": [
        "Simplify the expression 3x + 2x - 5.",
        "Factorize the quadratic expression x^2 - 5x + 6.",
        "Expand (2x + 3)(x - 4).",
        "Simplify the fraction (6x^2 - 2x)/(2x).",
        "Combine the like terms in the expression 4x + 3y - 2x + y."
    ],
    "1.1.2 Collecting terms": [
        "Simplify the expression 5a + 3a - 2a.",
        "What is the result of combining 4b - 2b + b?",
        "Combine the like terms in the expression 6c + 4d - 3c + 2d.",
        "Simplify 7x + 5y - 2x + 3y.",
        "What is the result of 8z - 4z + z?"
    ],
    "1.1.3 Removing brackets": [
        "Expand the expression (2x + 3)(x - 4).",
        "Remove the brackets in the expression 3(2x + 5).",
        "Simplify the expression (x + 2)(x - 3).",
        "Expand and simplify 4(x + 1)(x - 1).",
        "Remove the brackets in 5(3a - 4b)."
    ],
    "1.1.4 Factorisation": [
        "Factorize the quadratic expression x^2 - 9x + 20.",
        "What is the factorized form of x^2 - 4?",
        "Factorize 3x^2 - 12x.",
        "Factorize the expression 2x^2 - 8x + 6.",
        "Factorize completely 4x^2 - 16."
    ],
    "1.1.5 Multiplication": [
        "Multiply the expressions (x + 3)(x - 2).",
        "What is the product of (2x + 5)(x - 1)?",
        "Expand and simplify (3a + 4)(2a - 3).",
        "Multiply and simplify (x + 2)^2.",
        "Find the product of 4(x + 1)(x - 2)."
    ],
    "1.1.6 Fractions": [
        "Simplify the fraction (6x^2 - 2x)/(2x).",
        "What is the simplified form of (4a + 8)/(2)?",
        "Simplify (3x^2 - 9x)/(3x).",
        "Combine and simplify (2/x) + (3/x).",
        "What is the result of (x^2 - 4)/(x - 2)?"
    ],
    "1.2.1 Solving linear equations": [
        "Solve the linear equation 2x + 3 = 7.",
        "Find the value of x in the equation 4x - 5 = 11.",
        "Solve for x: 3(x - 2) = 12.",
        "Determine the solution to 5x + 2 = 3x - 4.",
        "Find x if 6x - 3 = 2x + 9."
    ],
    "1.2.2 Examples and exercises": [
        "Solve for x: 3x + 5 = 14.",
        "Determine the value of x in 7x - 2 = 3x + 10.",
        "Solve the equation 4(x - 1) = 8.",
        "Find x if 5x + 3 = 2x + 15.",
        "Solve for x: 2(x + 4) = 3x - 1."
    ],
    "1.3.1 Changing the subject of a formula": [
        "Make x the subject of the formula y = 3x + 4.",
        "Rearrange the equation 2x + y = 7 to make x the subject.",
        "Change the subject of the formula z = 4x - 2y to x.",
        "Make t the subject of the formula s = ut + 1/2at^2.",
        "Rearrange the equation P = 2l + 2w to make l the subject."
    ],
    "1.3.2 Examples and exercises": [
        "Solve for x: 3x + 5 = 14.",
        "Determine the value of x in 7x - 2 = 3x + 10.",
        "Solve the equation 4(x - 1) = 8.",
        "Find x if 5x + 3 = 2x + 15.",
        "Solve for x: 2(x + 4) = 3x - 1."
    ],
    "1.4.1 Solving quadratic equations": [
        "Solve the quadratic equation x^2 - 5x + 6 = 0.",
        "Find the roots of the equation x^2 + 3x - 4 = 0.",
        "Solve for x: 2x^2 - 4x - 6 = 0.",
        "Determine the solutions to the equation x^2 + 2x - 8 = 0.",
        "Find x if x^2 - 3x + 2 = 0."
    ],
    "1.4.2 Quadratic factorisation": [
        "Factorize the quadratic expression x^2 - 6x + 9.",
        "What is the factorized form of x^2 + x - 12?",
        "Factorize 2x^2 - 8x + 6.",
        "Factorize completely x^2 - 4x - 5.",
        "Find the factors of x^2 + 5x + 6."
    ],
    "1.4.3 Completing the square": [
        "Complete the square for the expression x^2 + 6x + 5.",
        "Rewrite x^2 - 4x + 1 in the form (x - p)^2 + q.",
        "Complete the square for 3x^2 - 12x + 9.",
        "Express x^2 + 10x + 25 in the form (x + a)^2 + b.",
        "Complete the square for x^2 + 8x - 2."
    ],
    "1.4.4 The quadratic formula": [
        "Use the quadratic formula to solve x^2 - 7x + 10 = 0.",
        "Find the roots of the equation 2x^2 - 4x - 6 = 0 using the quadratic formula.",
        "Solve for x using the quadratic formula: x^2 + 2x - 3 = 0.",
        "Determine the solutions to the equation x^2 - 5x + 4 = 0 using the quadratic formula.",
        "Find x if x^2 + 3x - 10 = 0 using the quadratic formula."
    ],
    "1.4.5 Examples and exercises": [
        "Solve for x: 3x + 5 = 14.",
        "Determine the value of x in 7x - 2 = 3x + 10.",
        "Solve the equation 4(x - 1) = 8.",
        "Find x if 5x + 3 = 2x + 15.",
        "Solve for x: 2(x + 4) = 3x - 1."
    ],
    "1.5.1 Solving simultaneous equations": [
        "Solve the simultaneous equations: 2x + y = 10 and x - y = 2.",
        "Find the values of x and y for the equations 3x - 2y = 4 and x + y = 5.",
        "Determine x and y if 4x + 3y = 7 and 2x - y = 1.",
        "Solve the simultaneous equations: x + 2y = 6 and 3x - y = 5.",
        "Find x and y for the equations x - 3y = 9 and 2x + y = 4."
    ],
    "1.5.2 Examples and exercises": [
        "Solve for x: 3x + 5 = 14.",
        "Determine the value of x in 7x - 2 = 3x + 10.",
        "Solve the equation 4(x - 1) = 8.",
        "Find x if 5x + 3 = 2x + 15.",
        "Solve for x: 2(x + 4) = 3x - 1."
    ],
    "1.6.1 Solving inequalities": [
        "Solve the inequality 3x - 5 > 4.",
        "Find the solution set for x if 2x + 3 < 7.",
        "Determine the values of x that satisfy x^2 - 4x < 0.",
        "Solve the inequality 5 - 2x ≤ 3.",
        "Find the range of x for which x + 1 > 2x - 3."
    ],
    "1.6.2 Examples and exercises": [
        "Solve for x: 3x + 5 = 14.",
        "Determine the value of x in 7x - 2 = 3x + 10.",
        "Solve the equation 4(x - 1) = 8.",
        "Find x if 5x + 3 = 2x + 15.",
        "Solve for x: 2(x + 4) = 3x - 1."
    ],
    "2.1.1 Co-ordinates": [
        "Find the coordinates of the midpoint of the line segment joining the points (2, 3) and (4, 5).",
        "Determine the coordinates of the centroid of a triangle with vertices (1, 2), (3, 4), and (5, 6).",
        "Calculate the coordinates of the point that divides the line segment joining (7, 8) and (9, 10) in the ratio 2:3.",
        "Find the coordinates of the reflection of the point (11, 12) in the x-axis.",
        "Determine the coordinates of the point that is 5 units away from (13, 14) along the line y = x."
    ],
    "2.2.1 Plotting, sketching, and drawing": [
        "Sketch the graph of y = 2x + 3.",
        "Plot the points (1, 2), (3, 4), (5, 6), and (7, 8) on a coordinate plane.",
        "Draw the graph of y = x^2 - 4x + 4.",
        "Sketch the graph of y = sin(x) for 0 <= x <= 2π.",
        "Plot the points (0, 0), (1, 1), (2, 4), and (3, 9) and draw the graph of y = x^2."
    ],
    "2.3.1 The gradient of a line": [
        "Find the gradient of the line passing through the points (2, 3) and (4, 5).",
        "Determine the gradient of the line with equation y = 3x + 2.",
        "Calculate the gradient of the line parallel to the line y = -2x + 7.",
        "Find the gradient of the line perpendicular to the line y = 1/2x - 3.",
        "Determine the gradient of the line passing through the origin and the point (6, 8)."
    ],
    "2.4.1 The distance between two points": [
        "Find the distance between the points (2, 3) and (4, 5).",
        "Calculate the distance between the points (1, 1) and (4, 5).",
        "Determine the distance between the points (-1, -1) and (2, 3).",
        "Find the distance between the points (0, 0) and (5, 12).",
        "Calculate the distance between the points (-3, -4) and (3, 4)."
    ],
    "2.5.1 The mid-point of a line joining two points": [
        "Find the midpoint of the line segment joining the points (2, 3) and (4, 5).",
        "Determine the midpoint of the line segment joining the points (1, 1) and (3, 3).",
        "Calculate the midpoint of the line segment joining the points (-2, -2) and (2, 2).",
        "Find the midpoint of the line segment joining the points (0, 0) and (4, 6).",
        "Determine the midpoint of the line segment joining the points (-1, -1) and (5, 5)."
    ],
    "2.6.1 The equation of a straight line": [
        "Find the equation of the line passing through the points (2, 3) and (4, 5).",
        "Determine the equation of the line with gradient 3 and y-intercept 2.",
        "Calculate the equation of the line parallel to the line y = -2x + 7.",
        "Find the equation of the line perpendicular to the line y = 1/2x - 3.",
        "Determine the equation of the line passing through the origin and the point (6, 8)."
    ],
    "2.7.1 Finding the equation of a line": [
        "Find the equation of the line passing through the points (2, 3) and (4, 5).",
        "Determine the equation of the line with gradient 3 and y-intercept 2.",
        "Calculate the equation of the line parallel to the line y = -2x + 7.",
        "Find the equation of the line perpendicular to the line y = 1/2x - 3.",
        "Determine the equation of the line passing through the origin and the point (6, 8)."
    ],
    "2.8.1 The intersection of two lines": [
        "Find the intersection of the lines y = 2x + 3 and y = -x + 1.",
        "Determine the point of intersection of the lines 3x - 4y = 12 and x + 2y = 6.",
        "Calculate the coordinates of the intersection of the lines y = 3x - 5 and y = -2x + 4.",
        "Find the intersection of the lines y = x + 2 and y = -x - 2.",
        "Determine the point of intersection of the lines 2x + 3y = 6 and x - y = 4."
    ],
    "2.9.1 Drawing curves": [
        "Draw the curve y = x^2 - 4x + 4.",
        "Sketch the curve y = sin(x) for 0 <= x <= 2π.",
        "Plot the curve y = e^x for x = -2 to 2.",
        "Draw the curve y = ln(x) for x > 0.",
        "Sketch the curve y = 1/x for x ≠ 0."
    ],
    "3.1.1 Definitions and notation": [
        "Define an arithmetic sequence.",
        "What is a geometric sequence?",
        "Describe the notation for the nth term of a sequence.",
        "Explain the common difference in an arithmetic sequence.",
        "Define the common ratio in a geometric sequence."
    ],
    "3.2.1 Arithmetic progressions": [
        "Find the 10th term of the arithmetic sequence with the first term 3 and common difference 2.",
        "Calculate the sum of the first 20 terms of the arithmetic sequence 5, 10, 15, ...",
        "What is the general term of the arithmetic sequence 7, 11, 15, 19, ...?",
        "If the 5th term of an arithmetic sequence is 20 and the common difference is 3, find the first term.",
        "Determine the number of terms in the arithmetic sequence that starts with 2 and has a common difference of 3, and ends with 50."
    ],
    "3.3.1 Geometric progressions": [
        "Find the 5th term of the geometric sequence with the first term 4 and common ratio 0.5.",
        "Calculate the sum of the first 8 terms of the geometric sequence 3, 6, 12, ...",
        "Determine the sum of the infinite geometric series with the first term 2 and common ratio 0.5.",
        "What is the general term of the geometric sequence 5, 10, 20, 40, ...?",
        "If the 4th term of a geometric sequence is 32 and the common ratio is 2, find the first term."
    ],
    "3.4.1 Binomial expansions": [
        "Expand (1 + x)^3 using the binomial theorem.",
        "Find the first four terms of the expansion of (2 + x)^4.",
        "Determine the coefficient of x^2 in the expansion of (1 + 3x)^5.",
        "Expand (1 - x)^6 using the binomial theorem.",
        "What is the term containing x^3 in the expansion of (2x + 1)^5?"
    ],
    "3.4.2 Examples and exercises": [
        "Expand (1 + x)^3 using the binomial theorem.",
        "Find the first four terms of the expansion of (2 + x)^4.",
        "Determine the coefficient of x^2 in the expansion of (1 + 3x)^5.",
        "Expand (1 - x)^6 using the binomial theorem.",
        "What is the term containing x^3 in the expansion of (2x + 1)^5?"
    ]
};
