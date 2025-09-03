function makeCatInvisibleIfFound(indexOfCat) {
    var queryString = new URLSearchParams(location.search);
    var catsStringQuery = queryString.get('cats');
    var catsBitArray = catsStringQuery.split("").slice(0, 21).map(bit => parseInt(bit));
    if (catsBitArray[indexOfCat] === 1) {
        return "hidden";
    }
    return "visible";
}