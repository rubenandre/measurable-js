module.exports = Array.prototype.zip = function (a) {
    if (!Array.isArray(a)) throw new Error("The argument have to be an array")
    if (this.length != a.length) throw new Error("Two array doesn't have same length")
    arr = new Array(0)
    for (let i = 0; i < a.length; i++){
        arr.push([this[i], a[i]])
    }
    return arr
}

