require("../prototypes/zipArray")


function euclidean_squared (u, v = null){
    if (!(Array.isArray(u) && Array.isArray(v))) throw new TypeError("The arguments have to be arrays")
    
    if (v === null) v = new Array(u.length).fill(0)

    if (u.length !== v.length) throw Error("The arrays must be the same length")

    let zipped = u.zip(v)

    return (zipped[0][1]- zipped[0][0])**2 + (zipped[1][1] - zipped[1][0])**2
}

module.exports = euclidean_squared