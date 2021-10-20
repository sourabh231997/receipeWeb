const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
var validator = require('express-validator');
const cors = require('cors');
const fs = require('fs')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8001;
app.set('trust proxy', true);
let corsOption = {
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};

app.use(cors(corsOption));
app.use(bodyParser.json({ limit: 1024102 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next)=>{
    next()
})
app.use(validator());
let cacheTime = 86400000 * 7;
app.use(express.static(__dirname, { maxAge: cacheTime }));

app.post('/sendUserMail', function(req, res,next) {
    req.checkBody('name', 'name is required').notEmpty();
    req.checkBody('email', 'email is required').notEmpty();
    req.checkBody('phone', 'phone is required').notEmpty();
    let errors =
    req.validationErrors();
    if (errors) res.send({ 'err': errors });
    else{
    let { name,email,phone,message } = req.body;
    sendReceipeAlertData(name,email,phone,message).then(data => {
        res.json({'success':true,data})
    }).catch(err => {
        console.log(err);
        next(err)
    })
    }
});

function sendReceipeAlertData(name,email,phone,message){
    return new Promise((resolve, reject) => {
        let smtpTransport = nodemailer.createTransport({
            service: process.env.MAIL_SERVICE,
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure:false, // secure:true for port 465, secure:false for port 587
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            },
            tls: { rejectUnauthorized: false },
        });
        smtpTransport.sendMail({
            from: process.env.MAIL_FROM,
            to: email,
            subject: "Rasayati Receipe's",
            html: `<h3>Name : ${name}</h3><h3>phone : ${phone}</h3><h3>message : ${message}</h3>`,
            // attachments: [
            //     {
            //         'name':'sourabh'
            //     },
            //     {
            //         'name':'anjani'
            //     },
            //     {
            //         'name':'yashu'
            //     }
            // ]
        }, function (error, info) {
            if (error) reject(error)
            console.log("Email send: ", JSON.stringify(info));
            resolve(true)
        });
    })
}

let server = app.listen(port, "localhost", () => { // 3
const { address, port } = server.address(); // 4
console.log('Listening on http://localhost:' + port);
})