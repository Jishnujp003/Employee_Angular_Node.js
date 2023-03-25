const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5000;const cors = require('cors');
app.use(cors());

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Remove 
// app.use(express.urlencoded({extended: true})); // New
// Parse application/json
// app.use(bodyParser.json()); // Remove
app.use(express.json()); // New
app.use(bodyParser.json());

// MySQL Code goes here
const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'employee'
})
app.post('/login', (req, res) => {
    const email = req.body.email;
    console.log("successfull",email)
    pool.getConnection((err, connection) => {
        if(err) throw err
        // console.log('connected as id ' + connection.threadId)
        connection.query('SELECT * from login where email = ?',email, (err, rows) => {
            connection.release() // return the connection to pool

            if (!err) {
                console.log("Name = ",rows[0].first_name,rows[0].last_name)
                if (rows[0].isadmin==1) {
                    console.log("User Is Admin")
                } else {
                    console.log("User Is an Employeecd")
                }
                res.send(rows)
            } else {
                console.log(err)
            }

            // if(err) throw err
            // console.log('The data from beer table are: \n', rows)
        })
    })
    // res.send({ response: 'Hello from Node.js!' });
  })
// Get all beers
// app.get('', (req, res) => {
//     pool.getConnection((err, connection) => {
//         if(err) throw err
//         console.log('connected as id ' + connection.threadId)
//         connection.query('SELECT * from login', (err, rows) => {
//             connection.release() // return the connection to pool

//             if (!err) {
//                 res.send(rows)
//             } else {
//                 console.log(err)
//             }

//             // if(err) throw err
//             console.log('The data from beer table are: \n', rows)
//         })
//     })
// })
// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
