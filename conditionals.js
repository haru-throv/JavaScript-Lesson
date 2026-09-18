// ? Conditionals & Logic Gates

let lightSwitch = "off"

// keyword; expression; code block.
if (lightSwitch === "on"){
    console.log("The light is on")
}

// let hasTurbo = "no" // resolves to true because of string Boolean value which it differs from a string with no value like this: "".

let hasTurbo = false

if (hasTurbo){
    console.log("The car has turbo")
}


/*
? Else Statement
- if all else fails, execute the code.
*/

if (hasTurbo){
    console.log("The car has turbo")
} else {
    console.log("No turbo")
}

/* 
? Else If Statement
- allows us to add extra expressions to check against.
*/

let temp = 76

if (temp >= 80){
    (console.log("Summer"))
} else if (temp >= 60){
    console.log("Spring")
} else {
    console.log("Cold")
}


if (temp >= 80){
    console.log("The Summer")
}

if (temp >= 60){
    console.log("The Spring")
}

console.log("Cold")

// ! example of a LOGIC ERROR


/* 

? Logic Operator: NOT, AND, OR

- OR Operator (||):
_ true if one of the conditions is true.
_ ex: happy if I get a dinner or a beer 

- AND Operator (&&):
_ true if both conditions are true.
_ happy if I get the dinner and the beer

- NOT Operator (! or != or !==)
_ flips the condition
_ falsey
_ !false resolves to true

 */


let hasBeer = false
let hasDinner = true

if (hasBeer || hasDinner){
    console.log("OR Happy")
}

if (hasBeer && hasDinner){
    console.log("AND Happy")
}

if (!hasBeer){
    console.log("NOT I am happy because I have no beer (wierd)")
}

if (hasBeer !== true){
    console.log("NOT I am happy because I have no beer (wierd)")
}
