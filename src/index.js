const express = require('express');
const User = require('./models/user')

const app = express();
const port = process.env.PORT || 3000
app.use(express.json())

app.post('/users', (req,res) => {
    const data = new User(req.body)
    console.log(req.body)
    data.save().then(() => {
        res.send(data)
    }).catch((e) => {
        res.status(400).send(e)
    })
});
app.listen(port, () => {
    console.log('The server is up and running ' + port);
})