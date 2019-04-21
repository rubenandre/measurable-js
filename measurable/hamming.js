require('../prototypes/zipArray')

/**
 * 
 * Count the number of different characters between two string (s1, s2)
 * That number represent how many substitutions are necessary to change s1 into s2 (and vice-versa)
 * 
 * @param {String} s1 - A String
 * @param {String} s2 - A string with same length of s1
 * 
 * @returns
 *  - The number of different characters between s1 and s2
 * 
 * @throws: 
 * - TypeError -> Not inserted a String
 * - Error -> The length of 2 strings don't match
 * 
 */
function hamming(s1, s2){
    if (!(typeof s1 === "string" && typeof s2 === "string")) throw new TypeError("The arguments have to be strings")

    if (s1.length !== s2.length) throw Error("The strings must be the same length")

    return s1.split('').zip(s2.split('')).reduce((acc, c) => {
        return (c[0] != c[1]) ? acc + 1 : acc
    }, 0)
}

module.exports = hamming