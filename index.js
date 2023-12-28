const { readExcelData } = require("./excelHandler");
const { sendEmail } = require("./emailService");
const fs = require("fs");

const logFilePath = "./logs/application.log";

function logMessage(message) {
  const logTime = new Date().toISOString();
  const logEntry = `[${logTime}] ${message}\n`;

  fs.appendFileSync(logFilePath, logEntry);
}

async function main() {
  try {
    const excelData = await readExcelData("./excelFolder/test.xlsx");
    for (const data of excelData) {
      const emailContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Template</title>
        </head>
        <body>
            <p>Hello ${data.firstName},</p>
            <p>This is a personalized email content.</p>
            <!-- Add other dynamic content -->
        </body>
        </html>
      `;

      const emailInfo = await sendEmail({
        to: data.email.text,
        subject: "Subject of the Email",
        html: emailContent,
      });

      console.log(
        `Email sent to ${data.email}. Message ID: ${emailInfo.messageId}`
      );
      logMessage(
        `Email sent to ${data.email}. Message ID: ${emailInfo.messageId}`
      );
    }

    console.log("Email sending process completed.");
    logMessage("Email sending process completed.");
  } catch (error) {
    console.error("Error:", error.message);
    logMessage(`Error: ${error.message}`);
  }
}

main();
