# girmapro-assignment

Overview:
The objective is to develop a Node.js application that integrates with an email service (e.g., Gmail API, SendGrid) and performs operations based on data from an Excel file. The application should be able to read data from an Excel file, process it to extract necessary fields, integrate with an email service to send personalized emails, dynamically generate email content based on the data, track the status of sent emails, implement error handling, and log relevant information.

Approach:
Project Setup and Dependencies:

Set up a Node.js project using npm init.
Install necessary dependencies (express for server setup, nodemailer for email service integration, and exceljs for Excel data handling).

Excel Data Handling (excelHandler.js):
Use the exceljs library to read data from the Excel file.
Extract necessary fields from each row and structure the data.

Email Service Integration (emailService.js):
Use the nodemailer library to integrate with the email service (Gmail in this case).
Set up an email transporter with authentication.
Implement a function to send personalized emails with provided content.

Dynamic Email Generation (templates/emailTemplate.html):
Create an HTML template with placeholders for dynamic data (e.g., {firstName}).

Email Sending Logic (index.js):
Read data from the Excel file using the Excel data handling module.
Iterate through each row of data.
Read the email template and replace placeholders with dynamic data.
Send personalized emails using the email service integration module.
Log relevant information for each email sent.

Error Handling and Logging (index.js):
Implement try...catch blocks to handle errors during the execution.
Log relevant information, including successful emails sent and any encountered errors.
Use a logging mechanism to store logs in a file (./logs/application.log).

How to run:-

run "npm i"
set up env file , by entering your email address and app password which you will get in your two factor authentication setting,
run "node index.js" to finally run the application.
