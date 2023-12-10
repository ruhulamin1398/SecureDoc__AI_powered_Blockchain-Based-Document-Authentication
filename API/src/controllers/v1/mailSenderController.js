const expressAsyncHandler = require("express-async-handler")

const nodemailer = require("nodemailer")

const sentEMail = expressAsyncHandler(async (data) => {
    console.log("data :  ", data)

    const tranporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,

        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        }
    })
    // console.log(tranporter)


    const mailOptions = {
        from: process.env.SMTP_USER,
        to: data.to,
        subject: data.subject,
        html: data.body
    }
    tranporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("email has been send", info.response)
        }
    })

})


module.exports= {sentEMail}