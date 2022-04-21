require("dotenv").config();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (msg) => {
    try{
        await sgMail.send(msg);
        console.log("Message sent successfully!")
    } catch (error){
        console.error(error);
        if (error.response){
            console.error(error.response.body)
        }
    }

};

sendMail({
    to: 'rashed.al6armoom@gmail.com',
  from: 'rashed.al6armoom@gmail.com ',
  subject: 'Hello world',
  text: 'Hello plain world!',
})