var Mailer = require("nodemailer");


var transportar = Mailer.createTransport({
    service: "gmail",
    auth:{
        user:"varshacraj995@gmail.com",
        pass:"wztnkbsktgrnhghj"
    }
});


var mailOptions = {
    from: "varshacraj995@gmail.com",
    to:"jeshubbk@gmail.com",
    subject:"Node mailer message",
    html: "<h1>Hai this is our first message using nodemailer</h1><p>That was easy!</p>"
};

transportar.sendMail(mailOptions,(err,info)=>{
    if(err)console.log(err);
    console.log(info);
})















