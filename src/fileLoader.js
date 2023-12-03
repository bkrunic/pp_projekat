const fs = require("fs");
const path = require("path");

const cleanData = (data) => {
 // remove comments from data file starting with /* and ending with */
 const dataCleaned = data.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "");
 // split data by space and new line and return array of words
 return dataCleaned.split('\n').filter((line) => line !== '');
};
const folderPath = "/Users/bogdan/Documents/GitHub/pp_projekat/recipes";

const getDataFromFile = (fileName) => {
    const filePath = path.join(folderPath, fileName);
    const fileData = fs.readFileSync(filePath, "utf8");
    const cleanedData = cleanData(fileData);
    return cleanedData;
};

module.exports = getDataFromFile;
