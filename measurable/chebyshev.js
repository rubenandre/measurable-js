require('../prototypes/zipArray')

module.exports =

/**
 * 
 * Calculate chebyshev distance between to vectors
 * 
 * source: https://en.wikipedia.org/wiki/Chebyshev_distance
 * 
 * Call Sequence:
 *  - chebyshev(u, v) -> Number
 * 
 * @param {Array} u - Array of numbers
 * @param {Array} v - Array of numbers
 * 
 * @returns 
 * - chebyshev distance between vector u and vector v
 * @throws: 
 * - TypeError -> Not inserted an array
 * - Error -> The length of 2 vectors don't match
 */

function chebyshev(u, v) {

    if (!(Array.isArray(u) && Array.isArray(v))) throw new TypeError("The arguments have to be arrays")
    if (u.length !== v.length) throw Error("The arrays must be the same length")

    abs_differences = u.zip(v).map((a) => {
        return Math.abs(a[1] - a[0])
    })

    return Math.max(...abs_differences)
}