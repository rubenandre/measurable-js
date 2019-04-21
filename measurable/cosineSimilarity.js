require("../prototypes/zipArray")
const euclidean = require("./euclidean")

/**
 * Calculate the cos-similarity between the orientation of two vectors.
 * 
 * Given 2 vectors u and v. similarity = cos (x) = (u . v) / (||u|| * ||v||)
 * 
 * source: https://en.wikipedia.org/wiki/Cosine_similarity#Definition
 * 
 * Call Sequence:
 *  - cosineSimilarity(u, v) -> Number
 * 
 * @param {Array} u - An array of numbers
 * @param {Array} v - An array of numbers
 * 
 * @returns 
 * - Normalized product of vector u and vector b
 * @throws: 
 * - TypeError -> Not inserted an array
 * - Error -> The length of 2 vectors don't match
 */
function cosineSimilarity(u, v){
    
    if (!(Array.isArray(u) && Array.isArray(v))) throw new TypeError("The arguments have to be arrays")
    if (u.length !== v.length) throw Error("The arrays must be the same length")

    let product = u.zip(v).reduce((acc, ary) =>{
        return acc + (ary[0] * ary[1])
    }, 0)

    return product / (euclidean(u) * euclidean(v))
}

module.exports = cosineSimilarity