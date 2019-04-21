const cosineSimilarity = require("./cosineSimilarity")

module.exports =

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
 */

function cosineDistance(u, v){
    return 1 - cosineSimilarity(u, v)
}