const euclidean_squared = require('./euclidean_squared')

module.exports = function euclidean(u, v = null){
    return Math.sqrt(euclidean_squared(u, v))
}