// Takes in a string query representing a byte array and turns the value at indexToChange to 1
function transformCatBitArray(indexToChange, catsStringQuery) {
    if (indexToChange >= 0 && indexToChange < 21){
        // bit array of size 21, each index represents a cat
        var catsBitArray = catsStringQuery.split("").slice(0, 21).map(bit => parseInt(bit));
        // toggle the bit at the specified index
        catsBitArray[indexToChange] = 1;
    }
    return catsBitArray.join("");
}

// Changes the URL query parameters based on indexToChange of transformCatBitArray
function changeCatsStringQueryParameter(indexToChange){
    var queryString = new URLSearchParams(location.search);
    var catsStringQuery = queryString.get('cats');
    var newCatsStringQuery = transformCatBitArray(indexToChange, catsStringQuery);
    location.search = '?cats=' + newCatsStringQuery + '&evil=' + (queryString.get('evil'));
}