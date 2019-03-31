exports.operators = {
    '=': {
        title: "Assignment operators - \'=\'",
        description: "Simple assignment operator is used to assign a value to a variable. The assignment operation evaluates to the assigned value. Chaining the assignment operator is possible in order to assign a single value to multiple variables.",
        syntax: "x = y",
        examples: "// Assuming the following variables\n//  x = 5\n//  y = 10\n//  z = 25\n\nx = y     // x is 10\nx = y = z // x, y and z are all 25"
    },
    "+=": {
        tytle: "Addition assignment",
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
    }

}
