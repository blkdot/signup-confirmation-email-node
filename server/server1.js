const nodemailer = require('nodemailer');
  
let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "cuong48e@gmail.com",
            pass: "Topmountain1010!@#"
        }
});
  
let message = {
    from: "cuong48e@gmail.com",
    to: "edmilsondevweb@gmail.com",
    subject: "Subject",
    html: "<h1>Hello SMTP Email</h1>"
}

transporter.sendMail(message, function(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
})