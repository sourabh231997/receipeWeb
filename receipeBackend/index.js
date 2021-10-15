const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
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
let cacheTime = 86400000 * 7;
app.use(express.static(__dirname, { maxAge: cacheTime }));

app.get('/getApi', function(req, res,next) {
    sendReceipeAlertData().then(data => {
        res.json({'success':true,data})
    }).catch(err => {
        console.log(err);
        next(err)
    })
});

function sendReceipeAlertData(){
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
            to: process.env.MAIL_TO,
            subject: "Receipe enabled work",
            html: `<h1>Receipe Working</h1> `,
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