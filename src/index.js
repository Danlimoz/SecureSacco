const express = require ('express');
const app = express();
const userRoutes = require('./user');
const transactionRoutes = require('./transaction');
const PORT = process.env.PORT || 3000;

app.use('/api', userRoutes);
app.use('/api, transactionRoutes');
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Welcome to SecureSacco!');
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});