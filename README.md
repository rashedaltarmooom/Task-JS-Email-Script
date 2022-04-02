# Certificate Mailer 🎓✉️

## Instructions

- Fork and clone [this repository](https://github.com/JoinCODED/Task-JS-Email-Script) to your `Development` folder.
- Create an `HTML` template for a certification page. [Examples](https://www.google.com/search?q=html+certification&sxsrf=APq-WBtldQ36xE9ER75MggEvBjAlxqmbag:1648889267097&source=lnms&tbm=isch&sa=X&ved=2ahUKEwia7qeY__T2AhWJTcAKHRsPCPAQ_AUoAXoECAEQAw&biw=1720&bih=654&dpr=2).
- Write a `Script` that takes the emails out of the `names.xlsx` and send the certification to all emails.

Don't forget to add your name and email to the excel sheet so you can test your code, and always check your spam folder.

### 🤼‍♂️ Date

- In your `HTML` template, add the date of the certification (which is today) but formatted in this way: `DD/MM/YYYY`.

### 🌶 Customize the email!

- In the excel file, you will find `name`,`email`,`course` and `grade`.
- Customize your `HTML` template to send a different email for each email in the excel sheet that shows his `name`, `course` and `grade`.

### 💡Libraries 

You can use those libraries but you don't have to stick to them, use anything that works for you.

- [SendGrid](https://sendgrid.com/)
- [convert-excel-to-json](https://www.npmjs.com/package/convert-excel-to-json)
- [Moment](https://www.npmjs.com/package/moment)
