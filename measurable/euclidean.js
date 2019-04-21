const euclidean_squared = require('./euclidean_squared')

module.exports = 

/**
 * Calculate the ordinary distance between 2 vectors (u and v)
 * 
 * Call sequence:
 *      * euclidean(u) -> Number
 *      * euclidean(u, v) -> Number
 * 
 * source: http://en.wikipedia.org/wiki/Euclidean_distance#N_dimensions
 * 
 * @param {Array} u -> An array of numbers
 * @param {Array} v -> An array of numbers (optional)
 * @returns:
 * - The euclidian distance beetween vector u and vector v 
 * - If vector v is null then return the norm of vector u
 * @throws: 
 * - TypeError -> Not inserted an array
 * - Error -> The length of 2 vectors don't match
 */

function euclidean(u, v = null){
    return Math.sqrt(euclidean_squared(u, v))
}