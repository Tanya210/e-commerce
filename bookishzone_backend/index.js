const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const User = require('./models/user.model')
const mongoose = require('mongoose');
// const DBConnect = require('./database');

app.use(express.json({ limit: "8mb" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});


const URL = 'mongodb+srv://navdeepsingh:navdeep@cluster0.lxphbgu.mongodb.net/bookish?retryWrites=true&w=majority';
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
 }, ()=>{
    console.log("DB connected");
 })
// DBConnect();
async function hashPassword(password) {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
}

async function comparePassword(password, hashedPassword) {
	return await bcrypt.compare(password, hashedPassword);
}

app.post('/api/register', async (req, res) =>{
	console.log("hello");
	const {firstname, lastname, email, password } = req.body;
	console.log(req.body)
	if(!firstname || !lastname || !email || !password) return res.json({status : 'error', error : 'Invalid Credentials!'});

	const hashedPassword = await hashPassword(password);

	try{
	const user = await User.create({
			firstname : firstname,
			lastname: lastname,
			email:email,
			password : hashedPassword
		})
		console.log(user);
		return res.status(200).json({status : 'ok'})
		
	} catch (err) {
		return res.status(404).json({status : 'error', error : 'Invalid Credentials!'})
	}
})


app.post('/api/login', async (req, res) =>{
	const { email, password } = req.body;

	if(!email || !password) return res.status(404).json({status : 'error', error : 'Invalid Credentials!'})

	try {

		const user = await User.findOne({
			email
		})

		if(!user) {
			return res.status(404).json({status : 'error', error : 'Invalid Credentials!'})
		}

		const isUser = await comparePassword(password, user.password)

		if (!isUser) {
			return res.status(404).json({status : 'error', error : 'Invalid Credentials!'})
		}

		return res.status(201).json({status: 'ok', user: user});

	} catch(err) {
		return res.status(501).json({status : 'error', error : 'Internal Server Error!'})
	}
		
})

app.listen(8800, ()=>{
	console.log("server strted on 8800")
})