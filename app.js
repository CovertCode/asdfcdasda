const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');

const app = express()
const router = express.Router()

// Set view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// User Form
app.get('/', (req, res) => {
    res.render('form');
})

// POST route where form will be submitter
app.post('/', (req, res) => {
    // User object destructuring to extract required data from body
    { customerName, cin, brand, rmc } = req.body;

    //   Structure data into required format
    let data = {
        customerName: customerName,
        cin: cin,
        rmc: rmc
    }

    //   Log data
    console.log(data);

    //   Send data to view which will render graph
    res.render('graph', {
        data
    })

});

app.listen(3003)