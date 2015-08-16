var isArrayLike = require("is_array_like"),
    isNullOrUndefined = require("is_null_or_undefined"),
    fastBindThis = require("fast_bind_this"),
    arrayForEach = require("array-for_each"),
    objectForEach = require("object-for_each");


module.exports = forEach;


function forEach(value, callback, thisArg) {
    callback = isNullOrUndefined(thisArg) ? callback : fastBindThis(callback, thisArg, 3);
    return isArrayLike(value) ?
        arrayForEach(value, callback) :
        objectForEach(value, callback);
}
