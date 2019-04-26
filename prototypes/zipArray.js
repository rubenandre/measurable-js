module.exports = 
/**
 * Converts argument to arrays, then merges elements of this with corresponding elements from argument. 
 * This generates a sequence of this.length 2-element arrays.
 * If the size of argument is less than this.length is thrown an exception
 * @param {Array} a: an array to zip to this array
 */
Array.prototype.zip = function (a) {
    if (!Array.isArray(a)) throw new TypeError("The argument have to be an array")
    if (this.length != a.length) throw new Error("The arrays must be the same length")
    let arr = new Array(0)
    for (let i = 0; i < a.length; i++){
        arr.push([this[i], a[i]])
    }
    return arr
}