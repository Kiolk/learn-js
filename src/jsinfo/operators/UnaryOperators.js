exports.operators = {
    "+" : {
        title : "Unary plus - \'+\'",
        description : "The unary plus operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already. Although unary negation (-) also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number. It can convert string representations of integers and floats, as well as the non-string values true, false, and null. Integers in both decimal and hexadecimal (\"0x\"-prefixed) formats are supported. Negative numbers are supported (though not for hex). If it cannot parse a particular value, it will evaluate to NaN.",
        syntax : "Operator: +x",
        examples : `+3     // 3
+'3'   // 3
+true  // 1
+false // 0
+null  // 0
+function(val){ return val } // NaN`
    },
    '-' : {
        title: "Unary negation - \'-\'",
        description: "The unary negation operator precedes its operand and negates it.",
        syntax: "Operator: -x",
        examples:`var x = 3;
y = -x; // y = -3, x = 3

// Unary negation operator can convert non-numbers into a number
var x = "4";
y = -x; // y = -4`
    }
}