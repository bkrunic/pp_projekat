const wordTypes = {
// starts with capital letter, a single word
ime_jela:{wordType:"ime-jela",regex:"[A-Z].*?"},
// matches a specific word - "sastojci:"
sastojci:{wordType:"sastojci",regex:"sastojci:"},
// matches a string that contains 3 words, first one is number second is ml/gr, third is a word that might contain '-' - "1 ml vode"
sastojak:{wordType:"sastojak",regex:"\\d+ (ml|g) .*"},
// matches a specific word - "uputstvo:"
uputstvo:{wordType:"uputstvo",regex:"uputstvo:"},
// matches a string that starts with stavi and ends with ciniju
stavi:{wordType:"stavi",regex:"stavi.*ciniju"},
// matches a string that starts with razredi and ends with cinije
razredi:{wordType:"razredi",regex:"razredi.*cinije"},
// matches a string that starts with presipaj sadrzaj and ends with "u pleh za pecenje"
parse_output:{wordType:"presipaj",regex:"presipaj.*u pleh za pecenje"},
// end of program, matches posluziti
posluziti:{wordType:"posluziti",regex:"posluziti"},
// matches a string that starts with a word that ends with 'ti' and contains word 'dok'
loop_end:{wordType:"loop-end",regex:"\\w+ti.*dok"},
// loop start, matches a string that starts with a word that ends with 'ti' and does not contain word 'dok'
loop_start:{wordType:"loop-start",regex:"\\w+ti(?!.*dok)"},
// break, matches the exact string ostavi da odstoji
break:{wordType:"break",regex:"ostavi da odstoji"},
// sabiranje, matches a string that starts with 'dodaj' and ends with ciniju
dodaj:{wordType:"sabiranje",regex:"dodaj.*ciniju"},
// deljenje, matches a string that starts with 'podeli' and ends with ciniju
podeli:{wordType:"deljenje",regex:"podeli.*ciniji"},
//oduzimanje, matches a string that starts with 'ukloni' and ends with cinije
ukloni:{wordType:"oduzimanje",regex:"ukloni.*cinije"},
// pop, matches a string that starts with 'pokupi' and ends with cinije
pokupi:{wordType:"pop",regex:"pokupi.*cinije"},
// uzmi * iz frizidera, matches a string that starts with 'uzmi' and ends with 'iz frizidera'
input:{wordType:"input",regex:"uzmi.*iz frizidera"},
// ako, matches a string that starts with 'ako ima vise'
if:{wordType:"if",regex:"ako ima vise.*"},

};

module.exports = wordTypes;