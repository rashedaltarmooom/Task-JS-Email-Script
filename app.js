// // Your code goes here
const API_KEY = "";
const sgmail = require("@sendgrid/mail");
sgmail.setApiKey(API_KEY);

let d = new Date();
let y = d.getFullYear();
let m = d.getMonth() + 1;
let day = d.getDate();
let todaysDate = `${day}/${m}/${y}`;

const excelToJson = require("convert-excel-to-json");
const result = excelToJson({
  sourceFile: "names.xlsx",
  columnToKey: {
    A: "name",
    B: "email",
    C: "course",
    D: "grade",
  },
});
let values = Object.values(result)[0]; 

for (let i = 0; i < values.length; i++) {
  let data = Object.values(values[i]);



  let htmlTemplate = `
  <html>
  <body >
      <div class="container" 
      style="border:dashed 5px rgb(218, 0, 0);
      width:950px;height: 530px;display:block;">

        <h1 style="font-size:70px;margin-bottom:10px;margin-left: 240px;margin-top:100px; color: blue">CERTIFICATE</h1>
        <h3 style="font-size:30px;margin-top:10px;margin-left: 350px;">OF COMPLETION</h3>
        <h4 id="date"style="margin-left: 450px;">21/04/2022</h4>
        <h1 style="margin-left: 390px;">${data[0]}</h1>
        <div style="margin-left: 230px;width:500px;margin-bottom: 0px;border-top: 1px solid black;"></div>
        <h4 style="margin-left: 300px;">Has successfully completed ${data[2]} Online Course </h4>
        <h4 style="margin-left: 390px;">with garde of : ${data[3]}</h4>

      </div>
  </body>
  `;

  const msg = {
    to: `${data[1]}`,
    from: "rashed.al6armoom@gmail.com",
    subject: `${data[2]} certificate`,
    content: [{ type: "text/html", value: htmlTemplate }],
  };


  sgmail
    .send(msg)
    .then((respose) =>
      console.log(`email was sent successfully to ${data[1]}`)
    );
}