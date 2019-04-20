require("../prototypes/zipArray")


function euclidean_squared (u, v = null){
    if (!(Array.isArray(u) && Array.isArray(v))) throw new TypeError("The arguments have to be arrays")
    
    if (v === null) v = new Array(u.length).fill(0)

    if (u.length !== v.length) throw Error("The arrays must be the same length")

    return u.zip(v).reduce((acc, arr) => {
        return acc + (arr[1] - arr[0])**2
    }, 0)
}

module.exports = euclidean_squared