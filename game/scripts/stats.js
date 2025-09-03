var queryString = new URLSearchParams(location.search)

// 21 cats in total. default to all 0s (not found) 
var catsBitArrayString = queryString.get("cats") || "00000000000000000000"

// Turn catsBitArrayString into a bit array
var catsBitArray = catsBitArrayString.split("").slice(0, 21).map(bit => parseInt(bit))

// Count number of 1's in bit array
var catsFound = catsBitArray.filter(bit => bit === 1)

// default to not evil (0)
var isEvil = queryString.get("evil") || "0"

var multiplier = isEvil === 1 ? 2 : 1;

ap.innerText = catsFound * multiplier;
cats.innerText = catsFound + "/21";