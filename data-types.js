console.log("This is a text")
console.log('This is also a text')

let firstName = "Chris"
let state = "California"

console.log(firstName, state)
// above are just multiple arguments in a method

let nameState = firstName + state
console.log(nameState)

let currentYear = "2026"
console.log(currentYear)

// Checking data type
console.log(typeof currentYear) // resolves to string


// ? Strings are indexed starting from zero, accessed using [index].

let pdk = "Suociepappadupalostapolompus"
console.log(pdk[5]) // it will be counting from 0 onwards.


// ? We can get a length of a string as well.

console.log(pdk.length) // with length it will be counting from 1 onwards. This is an example of a property.

console.log(pdk[28]) // index out of bounds error (off by one error) - resolves: undefined.

console.log(pdk.toUpperCase()) // This is an example of a method.


// ? Strings are immutable.

let leastFavoriteState = "Indiana"
leastFavoriteState[0] = "P"
console.log(leastFavoriteState)
leastFavoriteState = "Pndiana"
console.log(leastFavoriteState)


// ? String Interpolated - a way to piece strings together better.

let strInterpolatedState = `${firstName} ${state}`
let strConcatenatedSample = firstName + " " + state
console.log(strInterpolatedState, strConcatenatedSample)

/* 
	? Challenge
	* create a variable fullName with your name
	* create a variable street with street name
	* create a variable with state, city, etc with a value
	* finally interpolate them all together as finalAddress string
	! extra challenge - can you print each line on a new line in the console?
*/

let fullName = "Diego Dossena"
let street = "Zapican 234"
let stateZIP = "Soriano 75000"
let finalAddress = `${fullName} \n ${street} \n ${stateZIP}`
console.log(finalAddress)

/* 
	? Numbers
	* any integer or decimal
*/

console.log(25)
console.log(3.14)
console.log(typeof 200)

/* 
	? Boolean
	* binary value
	* true (on) or false (off)
	* 0 & 1
	* Falsey Values
		* 0
		* undefined
		* null
		* NaN
		* ""
*/

console.log(true, false)
console.log(Boolean(0), Boolean(1))
console.log(Boolean(null), Boolean(undefined), Boolean(NaN))
console.log(Boolean(""), Boolean(" "))

/* 
	? Null Undefined and Not A Number
*/

console.log(undefined, null, NaN)

console.log(finalAddress.slice(0, 10))