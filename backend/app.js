const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 4000; 

const adminRouter = require('./routes/admin');

app.listen(port, () => console.log(`Listening on port ${port}`)); 

app.get('/', (req, res) => { 
    res.send({ message: 'Hello World!' }); 
})

app.use(adminRouter);