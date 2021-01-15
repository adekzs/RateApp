const express = require('express');
const apiErrorHandler = require('./ApiErrorHandler');

const app = express();

//Body parser middleware 
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/rates', require('./routes/api/rates'));

const PORT = process.env.PORT || 5000;
app.use(apiErrorHandler);
app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));