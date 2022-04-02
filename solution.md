1. Start by setting up a `SendGrid` account and get your `Api key` and `Single Sender Verification`.
2. Install the required library for `SendGrid`:

```shell
npm i @sendgrid/mail
```

3. Store your api key in a variable:

```js
const apiKey = 'Your api key';
```

4. Import the `SendGrid` library:

```js
const sgMail = require('@sendgrid/mail');
```

5. Create a `msg` variable:

```js
const msg = {
  to: 'Your email here',
  from: 'Your Single Sender',
  subject: 'Certificate of Completion',
  text: 'Testing SendGrid',
};
```

6. Use `SgMail.send` method to send the message we just created:

```js
sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode);
    console.log(response[0].headers);
    console.log(response[0].body.errors);
  })
  .catch((error) => {
    console.log(error);
  });
```

7. Open your mail box and check if you received the email.

8. Now let's extract the values from the excel sheet, install the following package:

```shell
npm i convert-excel-to-json
```

9. Import the package we just installed:

```js
const excelToJson = require('convert-excel-to-json');
```

10. Create a variable called `recipients` and use the package to get the content of the excel sheet as following:

```js
const recipients = excelToJson({
  sourceFile: 'names.xlsx',
});
```

11. log the value of `recipients`. it contains many sheets, we need the first one only. then we will use the `columnToKey` property to change the columns to a more readable value:

```js
const recipients = excelToJson({
  sourceFile: 'names.xlsx',
  columnToKey: {
    A: 'name',
    B: 'email',
    C: 'course',
    D: 'grade',
  },
}).Sheet1;
```

12. Create your `HTML` template:

```html
<div
  style="width:800px; height:600px; padding:20px; text-align:center; border: 10px solid #787878"
>
  <div
    style="width:750px; height:550px; padding:20px; text-align:center; border: 5px solid #787878"
  >
    <span style="font-size:50px; font-weight:bold"
      >Certificate of Completion</span
    >
    <br /><br />
    <span style="font-size:25px"><i>This is to certify that</i></span>
    <br /><br />
    <span style="font-size:30px"><b>name</b></span
    ><br /><br />
    <span style="font-size:25px"><i>has completed the course</i></span>
    <br /><br />
    <span style="font-size:30px">course</span> <br /><br />
    <span style="font-size:20px">with score of <b>grade</b></span>
    <br /><br /><br /><br />
    <span style="font-size:25px"><i>dated</i></span
    ><br />
    <span style="font-size:30px">date</span>
  </div>
</div>
```

13. Now we will iterate over our list of `recipients` and send an email to each one of them:

```js
recipients.forEach((recipient) => {
  const html = `<div
  style="width:800px; height:600px; padding:20px; text-align:center; border: 10px solid #787878"
>
  <div
    style="width:750px; height:550px; padding:20px; text-align:center; border: 5px solid #787878"
  >
    <span style="font-size:50px; font-weight:bold"
      >Certificate of Completion</span
    >
    <br /><br />
    <span style="font-size:25px"><i>This is to certify that</i></span>
    <br /><br />
    <span style="font-size:30px"><b>name</b></span
    ><br /><br />
    <span style="font-size:25px"><i>has completed the course</i></span>
    <br /><br />
    <span style="font-size:30px">course</span> <br /><br />
    <span style="font-size:20px">with score of <b>grade</b></span>
    <br /><br /><br /><br />
    <span style="font-size:25px"><i>dated</i></span
    ><br />
    <span style="font-size:30px">date</span>
  </div>
</div>`;

  const msg = {
    to: recipient.email,
    from: 'Your Single Sender',
    subject: 'Certificate of Completion',
    text: 'some text',
    html: html,
  };

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
      console.log(response[0].body.errors);
    })
    .catch((error) => {
      console.log(error);
    });
});
```

Notice that we used the `html` property to send an `html` template in the email.

### 🤼‍♂️ Date

1. Install `moment` package:

```shell
npm i moment
```

2. Import `moment`:

```js
const moment = require('moment');
```

3. To get the date of today and format it the way we want:

```js
moment().format('DD/MM/YYYY');
```

4. Using string interpolation, inject this code in your `html` template:

```js
<span style="font-size:30px">${moment().format('DD/MM/YYYY')}</span>
```

### 🌶 Customize the email!

1. Using string interpolation, inject those values in your `html` template:

```js
const html = `<div style="width:800px; height:600px; padding:20px; text-align:center; border: 10px solid #787878">
    <div style="width:750px; height:550px; padding:20px; text-align:center; border: 5px solid #787878">
           <span style="font-size:50px; font-weight:bold">Certificate of Completion</span>
           <br><br>
           <span style="font-size:25px"><i>This is to certify that</i></span>
           <br><br>
           <span style="font-size:30px"><b>${
             recipient.name
           }</b></span><br/><br/>
           <span style="font-size:25px"><i>has completed the course</i></span> <br/><br/>
           <span style="font-size:30px">${recipient.course}</span> <br/><br/>
           <span style="font-size:20px">with score of <b>${
             recipient.grade
           }%</b></span> <br/><br/><br/><br/>
           <span style="font-size:25px"><i>dated</i></span><br>
          <span style="font-size:30px">${moment().format('DD/MM/YYYY')}</span>
    </div>
    </div>`;
```
