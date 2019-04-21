const cosineSimilarity = require("./cosineSimilarity")

/**
 * Calculate the cosine distance between the orientation of two vectors.
 * 
 * source: https://en.wikipedia.org/wiki/Cosine_similarity#Definition
 * 
 * Call sequence:
 *  - cosineSimilarity(u, v) -> Number
 * 
 * @param {Array} u - Array of numbers
 * @param {Array} v - Array of numbers
 * 
 * @returns 
 * - Normalized product of vector u and vector b
 * @throws: 
 * - TypeError -> Not inserted an array
 * - Error -> The length of 2 vectors don't match
 */

function cosineDistance(u, v){
    return 1 - cosineSimilarity(u, v)
}

module.exports = cosineDistance