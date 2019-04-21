require('./prototypes/zipArray')
const euclidean = require('./measurable/euclidean')
const euclideanSquared = require('./measurable/euclideanSquared')
const cosineSimilarity = require('./measurable/cosineSimilarity')
const cosineDistance = require('./measurable/cosineDistance')
const chebyshev = require('./measurable/chebyshev')
const hamming = require('./measurable/hamming')

const measurable = {
    euclidean,
    euclideanSquared,
    cosineSimilarity,
    cosineDistance,
    chebyshev,
    hamming
}

module.exports = measurable