/*
Token validation: In this stage, the lexer checks that each token is valid according to the rules of the programming language. 
For example, it might check that a variable name is a valid identifier, or that an operator has the correct syntax.

Word: "upper-case-letter"
Word type: string
Regex: \".*\"

*/
// require the wordTypes object
const wordTypes = require("./wordTypes");
// require the fileLoader function
const getDataFromFile = require("./fileLoader");

const matchData = (data) =>{
    // loop through data and wordtypes and match the data with regex
    // if match is found, return the word type, regex and the matched data
    // if no match is found, throw an error and exception
    const matchedData = data.map((x) => {
        for (const [key, value] of Object.entries(wordTypes)) {
            if(x.match(value.regex)){
                return {wordType:value.wordType,regex:value.regex,matchedData:x};
            }
        }
        throw new Error("No match found for: " + x);        
    });
    return matchedData;
}

(async () => {
const matchedData = matchData(getDataFromFile("recept_1_palacinke.txt"));
console.log(matchedData);
})();