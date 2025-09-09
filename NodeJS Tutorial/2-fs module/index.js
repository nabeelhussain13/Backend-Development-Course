const { error } = require('console')
const fs = require('fs')

let a = 3
let b = 2

sum = a + b
product = a * b

result = `The sum and product of ${a} and ${b} are ${sum} and ${product} respectively.`

fs.writeFile('result.txt', result, ((error) => {
  if (error) console.log("Error: ", error)
  else console.log("Result has been logged in file successfully.")
}))
