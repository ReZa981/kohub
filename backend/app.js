require('dotenv').config()
const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 4000; 

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

app.listen(port, () => console.log(`Listening on port ${port}`)); 
console.log(process.env.MYSQL_SERVER_HOST);

app.get('/', (req, res) => { 
    res.send({ message: 'Hello World!' }); 
})

app.use(userRouter)
app.use(adminRouter);