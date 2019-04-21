require("../prototypes/zipArray")

/**
 * Calculate the squared distance between 2 vectors (u and v)
 * 
 * Call sequence:
 *      * euclidean_squared(u) -> Number
 *      * euclidean_squared(u, v) -> Number
 * 
 * source: http://en.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * 
 * @param {Array} u -> An array of numbers
 * @param {Array} v -> An array of numbers (optional)
 * @returns:
 * - The euclidian squared distance beetween vector u and vector v 
 * - If vector v is null then return the squared norm of vector u
 * @throws: 
 * - TypeError -> Not inserted an array
 * - Error -> The length of 2 vectors don't match
 */
function euclidean_squared (u, v = null){
    if (!(Array.isArray(u) && Array.isArray(v))) throw new TypeError("The arguments have to be arrays")
    
    if (v === null) v = new Array(u.length).fill(0)

    if (u.length !== v.length) throw Error("The arrays must be the same length")

    return u.zip(v).reduce((acc, arr) => {
        return acc + (arr[1] - arr[0])**2
    }, 0)
}

module.exports = euclidean_squared