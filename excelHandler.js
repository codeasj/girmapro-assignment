// excelHandler.js
const ExcelJS = require("exceljs");

async function readExcelData(filePath) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);

  const worksheet = workbook.getWorksheet(1);

  const data = [];

  worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
    //  console.log(`Row ${rowNumber} values:`, row.getCell(3).value);
    const rowData = {
      email: row.getCell(1).value,
      firstName: row.getCell(3).value,
    };
    //  console.log("rowData:", row.getCell(3));
    data.push(rowData);
  });

  return data;
}

module.exports = { readExcelData };
