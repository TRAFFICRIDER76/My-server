// const{
//     sum= sum,
//     multiply= multiply,
//     divide= divide,
//     subtract= subtract
// } = require('./math.js');   

// console.log(sum(2, 3)); // Output: 5
// console.log(multiply(2, 3)); // Output: 6
// console.log(divide(6, 2)); // Output: 3
// console.log(subtract(5, 2)); // Output: 3

// import { sum as sum, 
//     multiply as multiply,
//      divide as divide, 
//      subtract as subtract 
//     } from './math.js';

//     console.log(sum(2, 3)); // Output: 5
//     console.log(multiply(2, 3)); // Output: 6
//     console.log(divide(6, 2)); // Output: 3
//     console.log(subtract(5, 2)); // Output: 3   

    import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Nikhil is a good boy')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})