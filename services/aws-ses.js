
// aws-ses.js
import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";
AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: "ap-southeast-2",
});
AWS.config.getCredentials(function (error) {
    if (error) {
        console.log(error.stack);
    }
});
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

// change this to the "to" email that you want
const adminMail = "wanhoyinjoshua1@gmail.com";
// Create a transporter of nodemailer
const transporter = nodemailer.createTransport({
    SES: ses,
});
export const testMail = async (userEmail,message) => {
    console.log(message.clientName)
    console.log(message.number)
    console.log(message.email)
    console.log(message.type)
    console.log(message.age)
    console.log(message.childname)
    console.log("hi")
try {
const response = await transporter.sendMail({
from:"info@kidsandcubsclinic.com.au",
replyTo:message.email,
to: "info@kidsandcubsclinic.com.au",
subject: `${message.type}_${message.clientName}`,
html: `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
<div style="padding:20px;">
<div style="max-width: 500px;">
<h2>${message.type}</h2>
<p>
<div>Name: ${message.clientName}</div>
<br></br>
<div>Phone No: ${message.number}</div>
<br></br>

<div>Email : ${message.email}</div>
<br></br>


${message.childname ? `Client Name${message.childname }<br></br> Client Age:${message.age}`:``}
<br></br>
<div>Concerns:</div>
<br></br>
<div>${message.concerns}</div>
</p>
</div>
</div>
</body>
</html>
`,
});
return response?.messageId
? { ok: true }
: { ok: false, msg: "Failed to send email" };
} catch (error) {
console.log("ERROR", error.message);
return { ok: false, msg: "Failed to send email" };
}
};
