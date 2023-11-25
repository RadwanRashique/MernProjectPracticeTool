const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()

const connectDB=require('./config/database')
connectDB()
dotenv.config();


// Middleware to parse JSON requests
app.use(express.json());
// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
const port=process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})