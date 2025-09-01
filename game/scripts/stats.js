var queryString = new URLSearchParams(location.search)

// 21 cats in total. default to all 0s (not found)
var catsBitmap = queryString.get("cats") || "00000000000000000000"

// Use regex to count number of 1's in bitmap using global flag
// ?.length uses optional chainging to avoid null errors
var catsFound = catsBitmap.match(/1/g)?.length || 0;

// default to not evil
var isEvil = queryString.get("evil") || "0"

ap.innerText = catsFound;
cats.innerText = catsFound + "/21";