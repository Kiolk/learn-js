exports.operators = {
        '=': {
                title: "Assignment operators - \'=\'",
                description: "Simple assignment operator is used to assign a value to a variable. The assignment operation evaluates to the assigned value. Chaining the assignment operator is possible in order to assign a single value to multiple variables.",
                syntax: "x = y",
                examples: "// Assuming the following variables\n//  x = 5\n//  y = 10\n//  z = 25\n\nx = y     // x is 10\nx = y = z // x, y and z are all 25"
        },
        "+=": {
                title: "Addition assignment",
                description: "The addition assignment operator adds the value of the right operand to a variable and assigns the result to the variable. The types of the two operands determine the behavior of the addition assignment operator. Addition or concatenation is possible.",
                syntax: "Operator: x += y\nMeaning:  x  = x + y",
                examples: `// Assuming the following variables
//  foo = 'foo'
//  bar = 5
//  baz = true


// Number + Number -> addition
bar += 2 // 7

// Boolean + Number -> addition
baz += 1 // 2

// Boolean + Boolean -> addition
baz += false // 1

// Number + String -> concatenation
bar += 'foo' // "5foo"

// String + Boolean -> concatenation
foo += false // "foofalse"

// String + String -> concatenation
foo += 'bar' // "foobar"`
        },
        '-=': {
                title: "Subtraction assignment - \'-=\'",
                description: "The subtraction assignment operator subtracts the value of the right operand from a variable and assigns the result to the variable.",
                syntax: "Operator: x -= y\nMeaning:  x  = x - y",
                examples: `// Assuming the following variable
//  bar = 5

bar -= 2     // 3
bar -= 'foo' // NaN`
        },
        '*=': {
                title: "Multiplication assignment - \'*=\'",
                description: "The multiplication assignment operator multiplies a variable by the value of the right operand and assigns the result to the variable.",
                syntax: "Operator: x *= y\nMeaning:  x  = x * y",
                examples: `// Assuming the following variable
//  bar = 5

bar *= 2     // 10
bar *= 'foo' // NaN`
        },
        '/=': {
                title: "Division assignment - \'/=\'",
                description: "The division assignment operator divides a variable by the value of the right operand and assigns the result to the variable.",
                syntax: "Operator: x /= y\nMeaning:  x  = x / y",
                examples: `// Assuming the following variable
//  bar = 5

bar /= 2     // 2.5
bar /= 'foo' // NaN
bar /= 0     // Infinity`,
        },
        '+': {
                title: "Addition - \'+\'",
                description: "The addition operator produces the sum of numeric operands or string concatenation.",
                syntax: "Operator: x + y",
                examples: `// Number + Number -> addition
1 + 2 // 3

// Boolean + Number -> addition
true + 1 // 2

// Boolean + Boolean -> addition
false + false // 0

// Number + String -> concatenation
5 + 'foo' // "5foo"

// String + Boolean -> concatenation
'foo' + false // "foofalse"

// String + String -> concatenation
'foo' + 'bar' // "foobar"`
        },
        '-' : {
                title: "Subtraction - \'-\'", 
                description: "The subtraction operator subtracts the two operands, producing their difference.",
                syntax: "Operator: x - y",
                examples: `5 - 3 // 2
3 - 5 // -2
'foo' - 3 // NaN`
        }
}
